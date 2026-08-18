# -*- coding: utf-8 -*-
"""Comprueba que ninguna clave de traducción usada en los .liquid falte.

Se ejecuta antes de cada push. Una clave que falta no rompe el tema: sale un
"Translation missing" en mitad de la página, que es peor, porque nadie se da
cuenta hasta que lo ve un cliente.
"""
import io, json, os, re, glob, sys

BASE = r'C:\Users\PC\dropscents'


def carga(nombre):
    # Shopify le antepone su cabecera /* ... */ a estos archivos en cuanto los
    # toca el editor de idiomas, y eso ya no es JSON valido.
    s = io.open(os.path.join(BASE, 'locales', nombre), encoding='utf-8').read()
    if s.lstrip().startswith('/*'):
        s = s[s.index('{'):]
    return json.loads(s)


def tiene(arbol, clave):
    nodo = arbol
    for parte in clave.split('.'):
        if not isinstance(nodo, dict) or parte not in nodo:
            return False
        nodo = nodo[parte]
    return isinstance(nodo, str)


es = carga('es.default.json')
en = carga('en.json')

usadas = set()
dinamicas = []
for ruta in glob.glob(os.path.join(BASE, '**', '*.liquid'), recursive=True):
    s = io.open(ruta, encoding='utf-8').read()
    i = s.find('{% schema %}')
    cuerpo = s[:i] if i > -1 else s
    usadas |= set(re.findall(r"'([a-z0-9_]+(?:\.[a-z0-9_]+)+)'\s*\|\s*t\b", cuerpo))
    # claves que se arman con append dentro de un bucle
    for prefijo in re.findall(r"assign clave = '([^']+)' \| append: (\w+)", cuerpo):
        dinamicas.append((os.path.basename(ruta), prefijo[0]))

# las dinámicas se expanden a mano: son bucles de índice conocido
usadas |= set('secciones.ritual.pasos.%d.%s' % (i, c) for i in (1, 2, 3, 4) for c in ('titulo', 'texto'))
usadas |= set('secciones.claro.preguntas.%d.%s' % (i, c) for i in (1, 2, 3, 4, 5) for c in ('p', 'r'))

fallos = []
for clave in sorted(usadas):
    if clave.endswith('.'):
        continue                      # el prefijo suelto de un append
    if not tiene(es, clave):
        fallos.append('es.default.json: ' + clave)
    if not tiene(en, clave):
        fallos.append('en.json: ' + clave)

print('claves de tienda comprobadas: %d' % len(usadas))
for d in sorted(set(dinamicas)):
    print('  clave dinámica en %s -> %s*' % d)
if fallos:
    print('\nFALTAN:')
    for f in fallos:
        print('  ' + f)
    sys.exit(1)
print('todas presentes en los dos idiomas')

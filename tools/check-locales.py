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


# Formas de plural de Shopify. Una clave que resuelve a un diccionario SOLO de
# estas formas es una traduccion valida, no un nodo intermedio: `| t: count: n`
# elige la forma. Sin esto el comprobador daba por perdida toda clave con plural.
PLURALES = {'zero', 'one', 'two', 'few', 'many', 'other'}


def tiene(arbol, clave):
    nodo = arbol
    for parte in clave.split('.'):
        if not isinstance(nodo, dict) or parte not in nodo:
            return False
        nodo = nodo[parte]
    if isinstance(nodo, str):
        return True
    return isinstance(nodo, dict) and bool(nodo) and set(nodo) <= PLURALES


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

# ---------------------------------------------------------------------------
# Las claves del EDITOR (las que empiezan por `t:`) viven en otras dos locales
# y hasta ahora no las miraba nadie. Una que falta no rompe nada visible: sale
# el nombre crudo de la clave dentro del editor de temas, y eso lo ve el
# comerciante, no el cliente, asi que puede quedarse ahi meses.
# ---------------------------------------------------------------------------
es_s = carga('es.default.schema.json')
en_s = carga('en.schema.json')

usadas_schema = set()
for ruta in (glob.glob(os.path.join(BASE, 'sections', '*.liquid')) +
             glob.glob(os.path.join(BASE, 'snippets', '*.liquid')) +
             glob.glob(os.path.join(BASE, 'config', 'settings_schema.json'))):
    s = io.open(ruta, encoding='utf-8').read()
    usadas_schema |= set(re.findall(r'"t:([a-z0-9_]+(?:\.[a-z0-9_]+)+)"', s))

for clave in sorted(usadas_schema):
    if not tiene(es_s, clave):
        fallos.append('es.default.schema.json: ' + clave)
    if not tiene(en_s, clave):
        fallos.append('en.schema.json: ' + clave)

print('claves de tienda comprobadas: %d' % len(usadas))
print('claves del editor comprobadas: %d' % len(usadas_schema))
for d in sorted(set(dinamicas)):
    print('  clave dinámica en %s -> %s*' % d)
if fallos:
    print('\nFALTAN:')
    for f in fallos:
        print('  ' + f)
    sys.exit(1)
print('todas presentes en los dos idiomas')

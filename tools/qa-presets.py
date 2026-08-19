# -*- coding: utf-8 -*-
"""Genera una plantilla que instancia TODOS los presets del tema, uno detras de
otro, para poder verlos de una pasada en un tema borrador.

    python tools/qa-presets.py            -> templates/index.presets.json
    python tools/qa-presets.py --limpiar  -> la borra

Por que hace falta: un preset es un paquete de ajustes con nombre, y Shopify no
lo valida en ningun sitio. tools/check-presets.py comprueba las dos reglas que
tumban el archivo entero, pero no dice si la seccion RENDERIZA bien con esos
ajustes. Esto si: se instancia cada preset y se mira.

La plantilla NO se sube al tema publicado; vive solo en el borrador de QA.
"""
import glob
import io
import json
import os
import re
import sys

sys.path.insert(0, 'tools')
from jsonc import escribir

# Shopify no admite mas de 25 secciones por plantilla, asi que los 51 presets
# se reparten en varias. `?view=presets1`, `?view=presets2`...
SALIDA = 'templates/index.presets%d.json'
POR_PLANTILLA = 20

# Las que necesitan el contexto de su pagina (producto, coleccion, carrito...)
# no se pueden instanciar en una portada, y las de cabecera y pie viven en su
# grupo. Ninguna de ellas tiene presets, asi que no se pierde nada.
FUERA = ('header', 'footer', 'carrito-drawer')


def esquema(ruta):
    s = io.open(ruta, encoding='utf-8').read()
    m = re.search(r'\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}', s, re.S)
    return json.loads(m.group(1)) if m else None


def por_defecto(schema):
    """Los valores por defecto de los ajustes, que es sobre lo que el preset
    escribe. Sin esto la seccion se instancia con la mitad de los ajustes en
    blanco y lo que se prueba no es lo que veria el comerciante."""
    fuera = {}
    for s in schema.get('settings', []):
        if 'id' in s and 'default' in s:
            fuera[s['id']] = s['default']
    return fuera


def bloques(preset, schema):
    """Los presets declaran los bloques como LISTA; una plantilla JSON los
    quiere como diccionario con su orden aparte."""
    lista = preset.get('blocks') or []
    if not lista:
        return None, None
    dic, orden = {}, []
    for i, b in enumerate(lista):
        bid = 'b%d' % (i + 1)
        tipo_b = b.get('type')
        base = {}
        for esq in schema.get('blocks', []):
            if esq.get('type') == tipo_b:
                for s in esq.get('settings', []):
                    if 'id' in s and 'default' in s:
                        base[s['id']] = s['default']
        base.update(b.get('settings') or {})
        dic[bid] = {'type': tipo_b, 'settings': base}
        orden.append(bid)
    return dic, orden


def main():
    if '--limpiar' in sys.argv:
        for f in glob.glob('templates/index.presets*.json'):
            os.remove(f)
            print('borrada', f)
        return

    secciones, orden, cuenta = {}, [], 0
    for ruta in sorted(glob.glob('sections/*.liquid')):
        tipo = os.path.basename(ruta)[:-7]
        if tipo.startswith('main-') or tipo in FUERA:
            continue
        sch = esquema(ruta)
        if not sch or not sch.get('presets'):
            continue
        base = por_defecto(sch)
        for i, preset in enumerate(sch['presets'], 1):
            clave = '%s_%d' % (tipo.replace('-', '_'), i)
            ajustes = dict(base)
            ajustes.update(preset.get('settings') or {})
            # Casi ningun preset fija coleccion (y hace bien: el comerciante la
            # elige). Para VERLOS hay que darles una, o todos salen con el
            # marcador de "elige una coleccion" y no se prueba nada.
            for s in sch.get('settings', []):
                if s.get('type') == 'collection' and not ajustes.get(s['id']):
                    ajustes[s['id']] = 'frontpage'
            entrada = {'type': tipo, 'settings': ajustes}
            dic, ord_b = bloques(preset, sch)
            if dic:
                entrada['blocks'] = dic
                entrada['block_order'] = ord_b
            secciones[clave] = entrada
            orden.append(clave)
            cuenta += 1

    for f in glob.glob('templates/index.presets*.json'):
        os.remove(f)

    for n, i in enumerate(range(0, len(orden), POR_PLANTILLA), 1):
        trozo = orden[i:i + POR_PLANTILLA]
        escribir(SALIDA % n, {
            'sections': {k: secciones[k] for k in trozo},
            'order': trozo,
        })
        print('%s  %d secciones: %s' % (SALIDA % n, len(trozo), ', '.join(trozo)))
    print('%d presets en total' % cuenta)


main()

# -*- coding: utf-8 -*-
"""Leer y escribir los JSON del tema, que no son JSON del todo.

Shopify escribe una cabecera `/* ... */` encima de `templates/*.json` y de los
`locales/*.json` que toca el editor. `json.load` se atraganta con ella, así que
todo script del repo pasa por aquí en vez de reinventar el `strip` cada vez.

`escribir` conserva la cabecera que traía el archivo: si se pierde, el editor
de temas la vuelve a poner y el diff siguiente sale lleno de ruido.
"""
import io
import json
import re

_CABECERA = re.compile(r'^\s*/\*.*?\*/\s*', re.S)


def leer(ruta):
    """Devuelve (datos, cabecera). La cabecera es '' si el archivo no traía."""
    s = io.open(ruta, encoding='utf-8-sig').read()
    m = _CABECERA.match(s)
    cabecera = m.group(0) if m else ''
    return json.loads(s[len(cabecera):]), cabecera


def datos(ruta):
    return leer(ruta)[0]


def escribir(ruta, obj, cabecera=''):
    cuerpo = json.dumps(obj, ensure_ascii=False, indent=2)
    io.open(ruta, 'w', encoding='utf-8', newline='\n').write(cabecera + cuerpo + '\n')

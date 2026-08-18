# -*- coding: utf-8 -*-
"""Comprueba que los presets encajen con los ajustes que declaran.

Por qué existe: `theme check` NO mira esto, y Shopify sí. Un preset con un
valor que no cae en el paso de su `range` hace que Shopify rechace el ARCHIVO
DE SECCIÓN ENTERO al instalar el tema. Y como la sección deja de existir,
cualquier plantilla JSON que la use se descarta también.

Así se perdió la cinta: `tamano: 15` en un range de `min 14, max 64, step 2`.
El síntoma no fue un error, fue una sección que simplemente no aparecía nunca,
y unas plantillas que se quedaban a medias sin decir por qué.

Comprueba, para cada preset y cada bloque de preset:
  · range   -> dentro de [min, max] y en el paso exacto
  · select  -> el valor es una de las opciones
  · checkbox-> booleano
  · el id del ajuste existe
  · el tipo de bloque existe
"""
import io, json, os, re, glob, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def esquema_de(ruta):
    """Saca el {% schema %} de un .liquid. Devuelve None si no tiene."""
    s = io.open(ruta, encoding='utf-8').read()
    m = re.search(r'\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}', s, re.S)
    if not m:
        return None
    try:
        return json.loads(m.group(1))
    except ValueError as e:
        return {'__error__': str(e)}


def revisa_rangos(ajustes, donde, fallos):
    """Shopify exige que un `range` tenga AL MENOS TRES pasos.

    Tampoco lo mira `theme check`, y el castigo es el mismo: rechaza el archivo
    de seccion entero. Un `min 1, max 2, step 1` (dos pasos) parece de lo mas
    razonable y no se instala nunca.
    """
    for a in ajustes or []:
        if a.get('type') != 'range':
            continue
        lo, hi, paso = a.get('min', 0), a.get('max', 0), a.get('step', 1)
        if paso <= 0:
            fallos.append('%s: "%s" tiene step %s' % (donde, a.get('id'), paso))
            continue
        pasos = (hi - lo) / float(paso) + 1
        if pasos < 3:
            fallos.append('%s: "%s" solo tiene %g pasos (min %s, max %s, step %s); '
                          'Shopify exige 3 o mas'
                          % (donde, a.get('id'), pasos, lo, hi, paso))
        if round((hi - lo) / float(paso), 6) % 1 != 0:
            fallos.append('%s: "%s" el max %s no cae en el paso desde %s cada %s'
                          % (donde, a.get('id'), hi, lo, paso))


def indexar(ajustes):
    """{id: definicion} saltandose header/paragraph, que no tienen id."""
    return dict((a['id'], a) for a in (ajustes or []) if a.get('id'))


def revisa_valores(valores, defs, donde, fallos):
    for clave, valor in (valores or {}).items():
        d = defs.get(clave)
        if d is None:
            fallos.append('%s: el ajuste "%s" no existe en el schema' % (donde, clave))
            continue
        tipo = d.get('type')

        if tipo == 'range':
            lo, hi, paso = d.get('min', 0), d.get('max', 0), d.get('step', 1)
            if not isinstance(valor, (int, float)):
                fallos.append('%s: "%s" = %r y el ajuste es un range' % (donde, clave, valor))
            elif valor < lo or valor > hi:
                fallos.append('%s: "%s" = %s fuera de [%s, %s]' % (donde, clave, valor, lo, hi))
            elif round((valor - lo) / paso, 6) % 1 != 0:
                # el que rompio la cinta: valido a la vista, invalido para Shopify
                cerca = lo + round((valor - lo) / paso) * paso
                fallos.append('%s: "%s" = %s no cae en el paso (min %s, step %s) -> usa %s'
                              % (donde, clave, valor, lo, paso, cerca))

        elif tipo == 'select':
            opciones = [o.get('value') for o in d.get('options', [])]
            if valor not in opciones:
                fallos.append('%s: "%s" = %r no esta entre %r' % (donde, clave, valor, opciones))

        elif tipo == 'checkbox':
            if not isinstance(valor, bool):
                fallos.append('%s: "%s" = %r y el ajuste es un checkbox' % (donde, clave, valor))


def main():
    fallos = []
    revisados = 0

    for ruta in sorted(glob.glob(os.path.join(BASE, 'sections', '*.liquid'))):
        esquema = esquema_de(ruta)
        nombre = os.path.basename(ruta)
        if esquema is None:
            continue
        if '__error__' in esquema:
            fallos.append('%s: el schema no es JSON valido (%s)' % (nombre, esquema['__error__']))
            continue

        revisa_rangos(esquema.get('settings'), nombre, fallos)
        for b in esquema.get('blocks', []) or []:
            revisa_rangos(b.get('settings'), '%s / bloque "%s"' % (nombre, b.get('type')), fallos)

        defs = indexar(esquema.get('settings'))
        defs_bloque = dict(
            (b['type'], indexar(b.get('settings')))
            for b in esquema.get('blocks', []) if b.get('type')
        )

        for preset in esquema.get('presets', []) or []:
            revisados += 1
            etiqueta = '%s / preset "%s"' % (nombre, preset.get('name', '?'))
            revisa_valores(preset.get('settings'), defs, etiqueta, fallos)

            for i, bloque in enumerate(preset.get('blocks', []) or []):
                tipo = bloque.get('type')
                if tipo not in defs_bloque:
                    fallos.append('%s: el bloque %d es de tipo "%s", que no existe' % (etiqueta, i + 1, tipo))
                    continue
                revisa_valores(bloque.get('settings'), defs_bloque[tipo],
                               '%s / bloque %d' % (etiqueta, i + 1), fallos)

        # los `default` del propio schema tambien tienen que encajar
        for a in esquema.get('settings', []) or []:
            if 'default' in a and a.get('id'):
                revisa_valores({a['id']: a['default']}, defs, '%s / default' % nombre, fallos)

    print('%d presets revisados en %d secciones'
          % (revisados, len(glob.glob(os.path.join(BASE, 'sections', '*.liquid')))))
    if fallos:
        print('\nFALLOS (Shopify rechazaria el archivo entero):')
        for f in fallos:
            print('  ' + f)
        sys.exit(1)
    print('todos los presets encajan con sus ajustes')


if __name__ == '__main__':
    main()

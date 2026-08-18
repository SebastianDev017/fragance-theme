# DropScents — tema de Shopify

Perfumería online (Caracas): decants de 5 y 10 ml para conocer una fragancia, y
el frasco completo al mismo precio que en Amazon cuando ya sabes que es el tuyo.

Este repositorio es **el tema de Shopify** y, a la vez, el proyecto que lo
construye. Los archivos del tema están en la raíz (`layout/`, `sections/`,
`snippets/`, `templates/`, `config/`, `locales/`, `assets/`) porque la
integración GitHub → Shopify sólo reconoce el tema si está ahí. El código
fuente de la interfaz vive en `src/` y se compila a `assets/`.

El mundo visual es **El Muestrario**: el abanico de colores de la ferretería.
Nadie compra un galón sin pegar tres muestras en la pared una semana; el
decant es la muestra. Está descrito entero en el contrato de dirección que
`layout/theme.liquid` imprime como comentario HTML al principio del `<body>`,
y el comp aprobado está en `.impeccable/mocks/comp-b-muralla.png`.

```bash
npm install

# el tema
npm run build:theme    # src/ → assets/dropscents.{js,css}
npm run theme:check    # validador oficial
npm run theme:dev      # servidor de desarrollo contra la tienda
npm run theme:push

# la maqueta local (para iterar sin levantar Shopify)
npm run dev
npm run build
```

> ⚠️ `assets/dropscents*.js|css` son **generados**. No los edites a mano: se
> pisan en el siguiente build. El código vive en `src/`.

---

## 0. Cómo montar la tienda

1. **Importa los productos** con `dropscents-productos.csv` (Productos →
   Importar). Son 8 fragancias × 3 variantes.
2. **Sube las fotos** a cada producto (las de `public/productos/` sirven de
   borrador; ver §1).
3. **Crea la colección** con los 8 productos y elígela en cada sección de
   catálogo desde el editor. Las secciones no buscan ningún handle fijo: el
   comerciante elige la colección, y si no hay ninguna elegida sale un
   marcador que dice qué falta en vez de un hueco.
4. **Publica la colección en el canal Tienda online.** Si no, su URL da 404
   aunque los productos sí se vean dentro de las secciones.
5. **Pon inventario** o desactiva el seguimiento de existencias. El CSV importa
   los productos, pero Shopify no fija cantidades en la importación: sin este
   paso todas las variantes salen «Agotado» y no se puede comprar.
6. **Conecta el repo** en Shopify → Tienda online → Temas → Añadir tema →
   Conectar desde GitHub.
7. **Publica el segundo idioma** en Configuración → Idiomas. El tema viene
   traducido entero, pero el selector sólo aparece si hay más de un idioma
   publicado: con uno solo no habría nada que elegir.

> ⚠️ El editor de temas reescribe `templates/index.json` cada vez que se toca
> algo en él. Lo último que se guarda gana, así que si tocas ese archivo a mano
> y a la vez alguien está en el editor, uno de los dos cambios se pierde.
> Para la portada, el editor es la fuente de verdad.

### El color de cada fragancia

El campo de color **no es decorativo ni sinestésico** —no dice a qué huele—:
se muestrea de la **foto real del frasco y su caja**. Eros es turquesa porque
el frasco de Eros es turquesa. Es verificable de un vistazo, y hace el
catálogo navegable por lo único que un comprador novato sí puede ver antes de
oler.

Lo decide `snippets/campo.liquid`, y sólo ese archivo, en tres pasos:

1. **La etiqueta del producto**, que es el mecanismo de verdad:

   | etiqueta        | qué hace                                        |
   |-----------------|-------------------------------------------------|
   | `campo:7`       | usa el campo 7 de la paleta (1–8)               |
   | `campo:#2E4A1F` | un color propio, el que sea                     |
   | `sobre:oscuro`  | fuerza tinta oscura encima (por defecto, clara) |

   `dropscents-productos.csv` **ya trae** `campo:1` … `campo:8` escritas.
   Reimportar el CSV con «actualizar productos existentes» las aplica.

2. **Un mapa por handle** con el catálogo actual, dentro del snippet, para que
   la tienda se vea correcta aunque nadie reimporte.

3. **Un hash del handle**, para cualquier producto nuevo sin etiqueta.

⚠️ **No uses el id del producto para repartir colores.** Aquí se intentó y el
catálogo entero salió del mismo color: los ids que Shopify asigna en una
importación por CSV avanzan con un **paso múltiplo de 8**, así que
`producto.id | modulo: 8` daba el mismo resto para los ocho productos. El id
parece aleatorio y no lo es.

Y tampoco esperes que un hash reparta ocho colores en ocho productos sin
repetir: es el problema del cumpleaños. Medido con los handles reales, la suma
de caracteres daba 5 colores distintos de 8 y el mejor polinómico 6. Por eso
existe el mapa, y por eso la etiqueta es el camino bueno.

### Contraste sobre campo

El texto pequeño sobre un campo saturado se tiñe del color de encima
(`color-mix`), **nunca de gris**: un gris sobre burdeos se lee sucio. El
porcentaje de la mezcla no es una decisión estética, es el suelo de contraste:
medido en el navegador, al 85% el campo turquesa daba 4.23:1 y no pasaba. Está
al 90%, y los ocho campos superan 4.5:1. La jerarquía la ponen el tamaño y el
espaciado, no el gris.

Si tocas un campo de la paleta, **vuelve a medir**: hay un medidor listo para
pegar en la consola en la §6.

### La convención que sostiene todo

El tema identifica las variantes **por su nombre**, no por su posición:

| Variante | Para qué se usa |
|---|---|
| `Decant 5 ml` | el precio de entrada de la tarjeta y del hero |
| `Decant 10 ml` | fila del comparador |
| cualquier otra (`Frasco 100 ml`…) | el frasco completo |

Y del producto: `vendor` = marca, `description` = la frase corta, `type` = las
notas. Cero metafields, a propósito: los metafields hay que crearlos a mano en
el admin y son fricción. Si renombras una variante a algo que no contenga
«Decant», pasa a contar como frasco completo.

## 1. Fotos de producto

Cada tarjeta del catálogo tiene su foto en `public/productos/<id>.webp` (el `id`
es el de `src/data.js`). Si el archivo no existe, la tarjeta muestra una silueta
neutra en vez de romperse.

**Ahora mismo hay 8 renders propios**, no fotos. Los genera
`tools/render-productos.html` con la misma geometría del hero y la receta de
color de cada fragancia (`render` en `data.js`): frasco con su jugo, tapón,
caja y sombra, sobre fondo transparente. Sirven para ver la maqueta poblada sin
depender de imágenes de nadie. Para regenerarlos:

```
npm run dev  →  abrir /tools/render-productos.html  →  window.__shots
```

**Para producción hacen falta fotos reales.** Frasco y caja juntos, mismo
encuadre, fondo blanco o transparente, horizontal (5:4), mínimo 1000 × 800 px,
`.webp`. Lo correcto es usar las tuyas —tienes los frascos en la mano— o las que
te autorice tu proveedor.

> ⚠️ El catálogo de Yupoo que se propuso como fuente (`yupooluxury`) es de
> réplicas: cada álbum se titula *"Perfume 1︰1 … AAA+"*. No se usó. Esta página
> dice textualmente "no trabajamos réplicas" y promete frasco original sellado;
> ilustrarla con fotos de réplicas la contradice en su propio argumento.

## 2. Precios y chat

**Todo se publica en dólares.** No hay ninguna constante de tasa en el código:
un número de tasa viejo en la página es peor que ninguno. Quien quiera pagar en
bolívares lo coordina por el chat, a la tasa del día — eso está dicho en el
hero, en la letra chica del comparador y en las preguntas.

`src/data.js` es el único archivo con números:

| Constante | Qué es |
|---|---|
| `ENVIO_AFUERA` | Lo que cuesta el courier si el cliente lo pide él mismo afuera. |
| `FRAGANCIAS[]` | Catálogo: precios en USD (`full`, `d5`, `d10`) y copy de cada fragancia. |

> ⚠️ Los precios del repo son de ejemplo. El argumento de la marca es que el
> frasco cuesta *lo mismo* que en Amazon, así que hay que poner los números
> reales del día — inflarlos rompe justo lo que la página promete.

**Envíos.** A toda Venezuela. Gratis desde **$20** pagando en dólares o desde
**$30** pagando en bolívares a tasa BCV (el umbral es más alto en bolívares
porque el cambio se come el margen). Está dicho en el comparador, en la letra
chica y en las preguntas — si cambian los montos, hay que tocar los tres.

**El chat es Chatty (Avada).** No hay WhatsApp en ninguna parte. Todos los
botones `[data-chat]` (cabecera, menú lateral, heroes, comparador, preguntas,
ficha de producto, carrito, cierre y pie) llaman a la misma función, en
`src/tienda.js`.

Chatty no publica una API estable. Lo que sí es estable es su botón flotante,
que lleva `data-chatty-widget="trigger"`, así que lo que se hace es pulsarlo:
es exactamente lo que haría un cliente y es lo que menos se rompe cuando la app
se actualiza. `ChattyJS.openWidget()` existe, pero **probado en la tienda, por
sí solo no abre el panel**, así que queda de segundo intento. Y como el script
de la app carga después que el tema, se reintenta unos segundos antes de darse
por vencido.

Si algún día se cambia de app, se puede saltar todo eso definiendo:

```js
window.DropScentsChat = () => tuPlugin.abrir();
```

Detrás de eso quedan las APIs de Crisp, Tawk, Tidio, Intercom, Zendesk y
Shopify Inbox, y si no responde ninguna sale un aviso con el Instagram en vez
de dejar un botón muerto.

## 3. Cómo está armado

```
layout/theme.liquid     el esqueleto
sections/               una sección por bloque de página
snippets/               tarjeta, iconos, texto partido, selector de idioma
templates/              index, product, collection, cart, search, page,
                        blog, article, 404, list-collections
locales/                es + en, tienda y editor (4 archivos)
src/styles.css          tokens de marca, portada y catálogo
src/tienda.css          cabecera, menú lateral, heroes, carrusel y páginas
src/ui.js               comparador, scroll suave y coreografía
src/tienda.js           chat, galería, menú lateral, carrusel, ficha, cantidades
src/scene.js            la escena 3D del hero «decant» (Three.js)
```

Vanilla + Vite. GSAP (ScrollTrigger) y Lenis en el bundle de la interfaz;
Three.js **sólo** en el de la escena, que se carga bajo demanda y únicamente si
la página tiene el hero 3D. Cero CDN: las fuentes están en el repo, no se pide
nada a un tercero en runtime.

### El primer viewport

`sections/muestrario.liquid` es la portada: una rejilla a sangre, sin
canalones, donde **la primera celda es la cabecera** —negra, con el titular,
la mecánica y el botón— y todas las demás son fragancias. Con 8 productos son
9 celdas y encaja exacto en 3×3.

Sustituyó a los heroes de foto a pantalla completa. `hero-vitrina` y
`hero-indice` siguen en el tema por si hacen falta en otra página; la escena
3D (750 KB de WebGL) se eliminó: un abanico son transforms de CSS.

Sin colección elegida, la sección cae a `collections.all` en vez de dejar la
portada en blanco esperando al comerciante.


### Idiomas

El tema habla español e inglés. Las claves están en `locales/`, generadas con
un script para que los cuatro archivos tengan exactamente las mismas: si a uno
le falta una, el cliente ve un «Translation missing» en mitad de la página.

Con los textos de las secciones la regla es: **un ajuste en blanco = el texto
traducido del idioma que esté viendo el cliente**. Si el comerciante escribe
algo, manda lo que escribió. Así el tema recién instalado ya se lee entero en
los dos idiomas sin que nadie tenga que traducir nada, y quien quiera su propia
voz sólo tiene que escribirla.

### Dos reglas de schema que `theme check` no mira

Shopify rechaza el **archivo de sección entero** si el `{% schema %}` incumple
alguna de estas dos, y no avisa por ningún sitio: la sección simplemente no se
instala. Y como deja de existir, cualquier plantilla JSON que la use se
descarta también — lo que en una ruta de colección se ve como un **404**.

1. **Un valor de preset tiene que caer en el paso de su `range`.** `tamano: 15`
   con `min 14, step 2` es inválido. Por eso la cinta no apareció nunca.
2. **Un `range` necesita al menos tres pasos.** `min 1, max 2, step 1` son dos
   pasos: parece de lo más razonable y no se instala jamás. Por eso el catálogo,
   la búsqueda y la colección se quedaron semanas sirviendo copias viejas.

```bash
python tools/check-presets.py   # las dos reglas + los tipos de cada preset
python tools/check-locales.py   # ninguna clave de idioma sin traducir
```

Las dos se pasan antes de cada push. `theme check` no sustituye a ninguna.

### Dos caminos de despliegue, y cuál manda

El tema está conectado por GitHub, así que **el repositorio es la fuente de
verdad**: lo que se empuje con `shopify theme push` lo acaba pisando la
sincronización. El push por CLI sirve para ver un cambio en segundos —
sobre todo plantillas JSON, que la sincronización tarda más en aplicar— pero
hay que commitear igual, o se pierde.

Y al revés: el **editor de temas** manda sobre `templates/*.json`. Mientras
alguien lo tenga abierto, los cambios de esos archivos en el repo no llegan.
Para la portada, el editor es la fuente de verdad.

## 4. Decisiones que conviene no deshacer sin querer

**El color lo pone el producto, no el fondo.** El gradiente blush → lavanda →
cielo sigue siendo la firma, pero bajado de intensidad y con las tarjetas en
blanco casi puro: ocho perfumes con sus cajas ya traen ocho paletas distintas, y
si el fondo compite, la estantería se vuelve un carnaval. Los valores saturados
de la primera propuesta están comentados al lado de cada token en `styles.css`
por si alguna vez se quiere volver a subir el volumen. El único momento donde el
gradiente sube es la tarjeta de cierre, una sola vez, al final.

**Un solo contenedor para toda la página.** `--edge` en `styles.css` es
`max(var(--gutter), (100% - var(--maxw)) / 2)`: el canalón cuando la ventana es
angosta, o lo que sobra a los lados cuando ya se alcanzó el ancho máximo. Lo
usan el nav, todas las secciones, el filete del footer y el hero, así que el
logo, los titulares, las tarjetas y el botón del chat caen exactamente sobre la
misma línea izquierda y derecha. Nada de `max-width` + `margin: auto` por
sección: eso desalineaba el header con el contenido.

**El hero es 50/50.** El texto vive en la mitad izquierda del ancho de página y
la escena 3D se centra en la mitad derecha. El reparto no está escrito a mano:
`scene.js` calcula el ancho visible del mundo a `z = 0` y coloca la escena en
`vw / 4`, así el 50/50 se mantiene en cualquier pantalla.

**El frasco del hero** está modelado como un Sauvage Elixir: cuerpo recto,
hombro en **chaflán recto** (con una curva bezier el perfil se acampana y parece
un tarro de crema) y tapón bajo, ancho y acanalado. El jugo es borgoña con
degradado — además de ser el color real del elixir, baja muchísimo el ruido
cromático de la página.

**El vidrio lleva fresnel.** Sin él, el frasco es una mancha blanca uniforme: el
vidrio real es casi invisible de frente y opaco en los cantos, así que la alfa
se sube en los ángulos rasantes. Eso es lo que dibuja la silueta. Y **no** usa
`transmission` de `MeshPhysicalMaterial`: sobre un canvas transparente no tiene
nada que refractar y sale lechoso.

**El líquido tiene superficie plana**, no copia el hombro del frasco, y el nivel
tope está limitado a `0.74` para que nunca se meta en el chaflán.

**El chorro no se recalcula cada frame.** Se construye una sola vez con la pose
exacta de vertido y se revela con un shader que descarta lo que está fuera de
`[uTail, uHead]`. Por eso el decant mantiene la pose mientras sirve.

**`fromTo` + `immediateRender: false` en el hero.** Los mismos elementos los
anima la entrada y el scroll. Un `.to()` capturaría el `opacity: 0` inicial y no
haría nada.

**`history.scrollRestoration = 'manual'`.** Con un hero fijado, que el navegador
restaure el scroll a media página hace que el pin arranque a mitad de la
animación y el sitio parezca roto.

**El desfase lateral de los escalones va con `gsap.matchMedia()`**: en móvil un
`x: ±50` saca las tarjetas de la pantalla y aparece scroll horizontal.

**La foto del producto nunca se recorta.** `object-fit: contain` dentro de una
proporción que elige el comerciante. En una tienda de perfumes la foto es el
frasco *y* su caja: recortarla por el centro corta justo lo que hay que ver. Y
si el producto tiene más de una foto, aparecen flechas al pasar el ratón; con
una sola no aparecen, porque unas flechas que no llevan a ningún sitio son
peores que ninguna.

**Las flechas de la galería van por encima del enlace de la tarjeta.** Toda la
tarjeta es clicable (`.card__name a::after { inset: 0 }`), así que sin
`z-index` y sin `stopPropagation` pulsar una flecha te llevaría al producto.

**El texto partido mide lo que la sección, no lo que el contenedor.** En el hero
«vitrina» el fondo se parte en el `--corte` de la sección y el texto en el
`--corte` de su propia caja. Coincidían de milagro con el corte al 50%; con
cualquier otro valor las dos líneas caían en sitios distintos. Por eso las dos
capas llevan `margin-inline` negativo hasta el borde. Y **se parten los tres
textos**, no sólo el titular: un subtítulo de un solo color deja media frase
ilegible sobre la mitad oscura.

**Las cantidades del carrito van en `updates[]` posicionales.** El orden de los
inputs es el orden de las líneas, así que los botones −/+ sólo cambian el valor
de un input: nunca añaden ni quitan ninguno, ni reordenan la lista.

**El selector de presentación son radios de verdad**, con `name="id"` dentro del
formulario de compra. Sin una línea de JavaScript el navegador manda la variante
marcada y Shopify la añade al carrito. El JS sólo refresca el precio grande.

**`| default: 'clave' | t` es una trampa.** Si el ajuste tiene valor, `default`
lo deja pasar y `t` intenta traducir el texto del comerciante como si fuera una
clave. El respaldo traducido va siempre con un `if ... == blank`.

**El bucle de la cinta es CSS puro.** La lista se imprime dos veces y la
animación desplaza el 50% exacto: el salto cae justo donde empieza la segunda
copia y no se ve el corte.

**Three.js va en su propio chunk** (`import()` dinámico, 133 KB gzip) para que el
titular y el fondo pinten antes. El ScrollTrigger del pin se crea después que
los demás, por eso lleva `refreshPriority: -1`.

## 5. Accesibilidad

- `prefers-reduced-motion`: sin Lenis, sin revelaciones y la escena se congela en
  un cuadro fijo con el frasco lleno (se repinta al redimensionar).
- Contraste: `--ink` 17:1, `--ink-2` 9:1, `--ink-3` 4.9:1 sobre el fondo claro.
- Foco visible en todo lo enfocable, objetivos táctiles ≥ 44 px, el comparador
  anuncia cambios con `aria-live="polite"`.
- Sin scroll horizontal en 390 / 768 / 1440.

## 6. QA

`qa/` está fuera del repo salvo unos pocos bancos que sí se versionan, porque
cargan el bundle **real** de `assets/` contra marcado escrito a mano y sirven
para lo que la tienda no puede probar rápido: la sincronización de GitHub
tarda minutos y el editor de temas manda sobre `templates/*.json`.

`qa/mundo.html` es el más útil de todos: el mundo entero —cabecera, muralla
con los ocho campos, franja de códigos, ficha de producto con la resta— con
los precios reales del catálogo. `qa/galeria.html` prueba las flechas de la
cartilla, que en vivo no se pueden ver mientras ningún producto tenga dos
fotos. Se abren sirviendo la carpeta del proyecto:

```bash
python -m http.server 8777
# → http://127.0.0.1:8777/qa/galeria.html
# → http://127.0.0.1:8777/qa/mundo.html    ← el mundo entero: muralla + ficha
```

Antes de cada push conviene pasar el validador de claves de idioma (no lo hace
`theme check`): una clave que falta no rompe nada, sólo escribe «Translation
missing» en mitad de la página, y nadie se entera hasta que lo ve un cliente.

Pendiente para producción: fotos reales de producto (y más de una por
fragancia, que es lo que enciende la galería), inventario en las variantes,
publicar la colección y el segundo idioma, Lighthouse, el Instagram real y los
precios del día.

### El medidor de contraste

`color-mix()` computa a `color(srgb r g b)` con valores 0–1, **no** a `rgb()`.
Un medidor escrito para `rgb()` devuelve ratios de 1.2 sobre texto que en
realidad está a 13:1, y se acaba «arreglando» lo que no estaba roto. Este
recorre el DOM real y sólo mira los elementos con texto propio:

```js
const toRGB = (s) => {
  let m = s.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?/);
  if (m) return (m[4] !== undefined && +m[4] === 0) ? null : [+m[1]*255, +m[2]*255, +m[3]*255];
  m = s.match(/^rgba?\(([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?/);
  if (m) return (m[4] !== undefined && +m[4] === 0) ? null : [+m[1], +m[2], +m[3]];
  return null;
};
const lum = (c) => { const v = c.map(x => (x/=255, x <= .03928 ? x/12.92 : ((x+.055)/1.055)**2.4));
                     return .2126*v[0] + .7152*v[1] + .0722*v[2]; };
const bg = (el) => { for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
                       const c = toRGB(getComputedStyle(n).backgroundColor); if (c) return c; } return [255,255,255]; };

console.table([...document.querySelectorAll('main *, header *')].filter(el =>
  [...el.childNodes].some(c => c.nodeType === 3 && c.textContent.trim())).map(el => {
    const cs = getComputedStyle(el), fg = toRGB(cs.color); if (!fg) return null;
    const l1 = lum(fg), l2 = lum(bg(el));
    const r = (Math.max(l1,l2) + .05) / (Math.min(l1,l2) + .05);
    const px = parseFloat(cs.fontSize), w = +cs.fontWeight || 400;
    const min = (px >= 24 || (px >= 18.66 && w >= 700)) ? 3 : 4.5;
    return r < min ? { cls: el.className, txt: el.textContent.trim().slice(0,24), ratio: +r.toFixed(2), min } : null;
  }).filter(Boolean));
```

Un `console.table` vacío es el resultado bueno. Ojo: los reveals dejan
elementos en `opacity: 0`, y medir con ellos apagados da falsos positivos —
mide con la sección ya visible, no con una captura `fullPage`.

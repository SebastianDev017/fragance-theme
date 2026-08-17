# DropScents — landing

Perfumería online (Caracas): decants de 5 y 10 ml para conocer una fragancia, y
el frasco completo al mismo precio que en Amazon cuando ya sabes que es el tuyo.

Este repositorio es **el tema de Shopify** y, a la vez, el proyecto que lo
construye. Los archivos del tema están en la raíz (`layout/`, `sections/`,
`snippets/`, `templates/`, `config/`, `locales/`, `assets/`) porque la
integración GitHub → Shopify sólo reconoce el tema si está ahí. El código
fuente del 3D y de la interfaz vive en `src/` y se compila a `assets/`.

```bash
npm install

# el tema
npm run build:theme    # src/ → assets/dropscents.{js,css} + dropscents-scene.js
npm run theme:check    # validador oficial
npm run theme:dev      # servidor de desarrollo contra la tienda
npm run theme:push

# la maqueta local (para iterar el 3D sin levantar Shopify)
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
3. **Crea la colección** `catalogo` y mete los 8 productos. Las secciones del
   home la buscan por ese handle.
4. **Conecta el repo** en Shopify → Tienda online → Temas → Añadir tema →
   Conectar desde GitHub.

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

**El chat.** No hay WhatsApp en ninguna parte. Todos los botones `[data-chat]`
(nav, hero, comparador, cierre, footer) llaman a la misma función. Para
conectar tu plugin de Shopify, basta con definir:

```js
window.DropScentsChat = () => tuPlugin.abrir();
```

Si no defines nada, intenta las APIs de los plugins más comunes (Crisp, Tawk,
Tidio, Intercom, Zendesk, Shopify Inbox) y, si no hay ninguno, muestra un aviso
con el Instagram en vez de dejar un botón muerto. El Instagram sí se queda.

## 3. Cómo está armado

```
index.html      markup completo, sin frameworks
src/styles.css  tokens de marca, layout y estados
src/main.js     datos → DOM, chat, comparador, Lenis y coreografía de scroll
src/scene.js    la escena 3D del hero (Three.js)
src/data.js     catálogo y precios
public/fonts/   Clash Display + Switzer self-hosted (7 woff2, ~120 KB)
public/productos/  fotos del catálogo (ver arriba)
```

Vanilla + Vite. Three.js, GSAP (ScrollTrigger) y Lenis. Cero CDN: las fuentes
están en el repo, no se pide nada a un tercero en runtime.

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

`qa/` (fuera del repo, sólo local) tiene las capturas de las tres propuestas:
`qa*` la primera (gradiente fuerte, tarjetas de colores), `v2-*` la calmada con
hero 50/50 y `v3-*` la actual con contenedor único y catálogo poblado.

Pendiente para producción: subir las fotos de producto, correr Lighthouse sobre
`dist/` servido, poner el Instagram real y sustituir precios por los del día.

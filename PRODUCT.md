# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Comprador principal: **el curioso novato**. No sabe de fragancias, no distingue
notas ni casas, y le intimida la perfumería tradicional. No está dispuesto a
gastar $120–$150 a ciegas en un frasco que quizá no sea suyo. Su trabajo real no
es "comprar perfume": es **descubrir cuál es el suyo sin arriesgar dinero**.

Compra desde Venezuela, en dólares. Caracas es el núcleo; el interior del país
es mercado secundario con logística distinta.

Entusiastas y compradores de precio existen y llegarán al catálogo, pero no son
a quienes se les diseña la ruta principal.

## Product Purpose

Vender **decants de 5 y 10 ml** de fragancias de diseñador como forma de bajo
riesgo de conocer una fragancia, y el **frasco completo sellado** a precio
comparable con Amazon una vez que el comprador ya sabe que es el suyo.

Éxito = el novato pasa de decant a frasco completo. El decant no es el producto
final; es el mecanismo que hace posible la venta grande sin miedo.

## Positioning

**El crédito del decant.** Pagas el decant, lo vives una semana, y si resulta ser
el tuyo te descuentan del frasco completo exactamente lo que pagaste por el
decant. Probar no te costó nada.

Una decantería vecina puede vender los mismos mililitros; lo que no puede copiar
sin cambiar su negocio es la combinación de crédito completo del decant **y**
paridad de precio con Amazon en el frasco. El decant deja de ser una venta
alternativa y pasa a ser el costo de adquisición del cliente.

## Operating Context

- **Entrega:** Caracas en 24–48 h. Interior por Zoom o MRW en 2–3 días hábiles.
  Envío gratis desde $20.
- **Moneda:** USD.
- **Idiomas:** tienda bilingüe español/inglés.
- **Catálogo:** 8 fragancias × 3 variantes (5 ml, 10 ml, frasco completo) = 24
  SKU. El tema identifica las variantes **por su nombre**, nunca por su posición.
- **Uso real del decant:** 5 o 10 ml alcanzan para 30 a 60 días de uso; la
  decisión se toma observando cómo abre, cómo seca, cuánto dura y qué le dicen
  al comprador en la calle.

## Capabilities and Constraints

- Tema Shopify OS 2.0. La integración GitHub → Shopify exige que los archivos del
  tema vivan en la raíz del repo.
- `src/` compila a `assets/dropscents.{js,css}` y `assets/dropscents-scene.js`.
  Los assets generados no se editan a mano: se pisan en el siguiente build.
- `templates/index.json` lo reescribe el editor de temas; para la portada el
  editor es la fuente de verdad y el último guardado gana.
- Las secciones de catálogo no asumen ningún handle: el comerciante elige la
  colección en el editor, y sin elección se muestra un marcador que dice qué
  falta en lugar de un hueco vacío.
- Shopify no fija inventario en la importación por CSV; hay que ponerlo aparte o
  desactivar el seguimiento de existencias.
- El selector de idioma sólo aparece con dos o más idiomas publicados.
- Tienda de desarrollo: `volt-achjxgdn.myshopify.com`.
- **Estado: aún sin lanzar.** No hay tráfico, ventas ni datos de conversión.

## Brand Commitments

Vinculante, confirmado por el usuario:

- **Tipografía:** Clash Display (500/600/700) + Switzer (400/500/600/700),
  self-hosted en `assets/` como woff2. Se conservan.
- **Bilingüe es/en:** las 4 locales están completas y todo lo nuevo nace
  traducido. No se envía nada que exista en un solo idioma.

Explícitamente **no** declarado vinculante (queda abierto para el revamp):

- El nombre «DropScents» y la voz actual («sin vendedor encima, sin discurso»).
  La evidencia del repo, el dominio y la tienda usan ese nombre, así que se
  presume vigente mientras el usuario no diga lo contrario, pero no se confirmó
  como intocable.
- La escena 3D (`assets/dropscents-scene.js`, 750 KB). Puede reemplazarse o
  eliminarse.

## Evidence on Hand

- **Real:** catálogo de 24 SKU en `dropscents-productos.csv`; fotos borrador en
  `public/productos/`; los términos de envío, precio y crédito del decant son
  compromisos reales del negocio.
- **Inexistente, y no se puede inventar:** clientes, testimonios, reseñas,
  valoraciones, prensa, cifras de ventas o de comunidad. El negocio no ha
  lanzado. La sección `voces` no puede rellenarse con prueba social fabricada;
  si no hay voces reales, esa superficie debe ganar confianza de otra forma o
  desaparecer.

## Product Principles

1. **Quitar el riesgo antes de pedir la venta.** El crédito del decant es el
   producto. Si un visitante no entiende que probar no le cuesta nada, la
   superficie falló, por bonita que sea.
2. **Enseñar sin condescender.** El comprador no sabe qué es una nota de salida.
   Se le explica en sus palabras y con lo que él puede observar, no con jerga de
   perfumería ni con poesía de nicho.
3. **Decir sólo lo que es verdad.** Sin clientes todavía, la confianza se gana
   con especificidad verificable —tiempos, precios, términos, mililitros— y
   nunca con prueba social prestada.
4. **El bilingüe es estructural, no una función.** Nada se envía existiendo en un
   solo idioma.
5. **La tienda la opera el comerciante.** El contenido entra por el editor; una
   elección que falta se anuncia como falta, no se disfraza de vacío.

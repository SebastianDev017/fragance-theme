# Design

Sistema visual de DropScents, **leído del tema construido**, no de intenciones.
Los valores son los que están en `src/styles.css`; si algo aquí no coincide con
el código, manda el código y este archivo está desactualizado.

La dirección la fijó el cliente y está resumida en el contrato que
`layout/theme.liquid` imprime como comentario HTML al principio del `<body>`.
Comps de referencia: `.impeccable/mocks/blush-home.png` y `blush-pdp.png`.

---

## La regla que gobierna todo

**El fondo de página va casi neutro.** Encima hay ocho fotos de producto y cada
frasco trae ya sus colores; un degradado saturado a pantalla completa debajo de
eso apaga el producto. El color se gasta donde **identifica** algo:

| dónde | qué color |
|---|---|
| el tinte de cada tarjeta | uno de los ocho `--campo-*` |
| el crédito de la resta, la etapa sellada, el badge del carrito | `--punch` |
| el fondo | dos lavados suaves sobre perla |

La forma blanda —vidrio, esquina redonda, sombra tintada— carga el carácter.
La saturación, no.

## Color

```
--pearl      #F2F0F5   fondo base
--paper      #FDFCFD
--stock-2    #EFECF2   rebajes: filas alternas, marcos sin foto

--ink        #2B0F33   ciruela profundo
--ink-2      #56296B   secundario
--ink-3      #6E4680   meta, sólo etiquetas
--cream      #FFF7FB   tinta reversada sobre ciruela

--punch      #D42060   único acento saturado, dosis mínima
--punch-2    #B01B4E   el mismo para texto de 11 px o menos
--alerta     #B01B4E
```

**Los dos lavados del fondo**, y son dos a propósito: cada parada más es una
competencia más contra la foto del producto.

```
--lavado-1  rgba(253,217,222,.40)   blush, arriba a la izquierda
--lavado-2  rgba(198,225,254,.34)   cielo, abajo a la derecha
```

**La familia de la marca** (`--blush #FDD9DE`, `--lavender #DCD0FD`,
`--sky #C6E1FE`) sólo se usa a plena saturación en piezas pequeñas: la gota del
logotipo y la cinta si el comerciante la enciende.

**Los ocho tintes.** Uno por fragancia, del tono real de su frasco rebajado a
la familia del degradado. Los reparte `snippets/campo.liquid` y sólo ese
archivo; el mecanismo está documentado en el README §0.

```
--campo-1 #F0DAE0  Sauvage Elixir      --campo-5 #F5E5E7  La Vie Est Belle
--campo-2 #DDE0FB  Bleu de Chanel      --campo-6 #F5E5DB  Stronger With You
--campo-3 #F3E9DE  Le Male Elixir      --campo-7 #E1EFEE  Eros
--campo-4 #E5E2F8  Good Girl           --campo-8 #F4ECDC  Libre
```

Todos son claros, así que la tinta encima es siempre `--ink`.

### Contraste

Medido en el navegador, componiendo las capas semitransparentes del vidrio:
**0 fallos** sobre 63 nodos de texto. Dos valores existen por esa medición y no
por gusto: `--punch` bajó de `#E8356F` (4.16:1, no pasaba) a `#D42060`, y
`--punch-2` existe porque a 11 px el rosa vivo se queda en 4.45.

## Tipografía

Vinculante por `PRODUCT.md`, self-hosted en `assets/` como woff2.

- **Clash Display** 500/600/700 — titulares, nombres de producto, cifras grandes
- **Switzer** 400/500/600/700 — todo lo demás

`letter-spacing` negativo en display (−.025 a −.045em según tamaño),
`line-height` de 1 a 1.12. Toda cifra es `tabular-nums lining-nums`: un precio
que baila al cambiar de variante delata que nadie miró.

| pieza | tamaño |
|---|---|
| titular de portada | `clamp(2.1rem, 4.5vw, 3.7rem)` |
| nombre en la ficha | `clamp(2.1rem, 4.4vw, 3.4rem)` |
| «te queda por pagar» | `clamp(2rem, 4.4vw, 2.9rem)` |
| nombre en la tarjeta | `clamp(1.15rem, 1.5vw, 1.42rem)` |
| marca, códigos | .68–.72rem, `.16em` de tracking, versalitas |

## Forma

```
--r-sm 12px   --r-md 18px   --r-lg 26px   --r-xl 38px   --r-pill 999px
```

Nada tiene esquina viva. Los botones y los selectores de variante son
**píldoras**; las tarjetas, paneles y la cabecera usan `--r-xl`.

**Vidrio esmerilado** en toda superficie elevada: `background` blanco al 66–92 %,
`border: 1px solid rgba(255,255,255,.9)` y `backdrop-filter: blur(14px)
saturate(130%)`. El fondo de página tiene que verse por debajo.

**Sombras** con desplazamiento **y** desenfoque, tintadas de ciruela, nunca de
negro. Un halo sin desplazamiento es decoración, no profundidad.

```
--shadow-s  0 1px 2px rgba(43,15,51,.04), 0 4px 14px -8px rgba(43,15,51,.16)
--shadow-m  0 2px 6px rgba(43,15,51,.05), 0 18px 44px -22px rgba(43,15,51,.26)
--shadow-l  0 4px 10px rgba(43,15,51,.05), 0 40px 90px -40px rgba(43,15,51,.34)
```

## Composición

Un solo contenedor para toda la página: `--maxw: 1360px`, `--gutter:
clamp(1.25rem, 4vw, 3rem)`, y `--edge` es lo que sobra a los lados. Cabecera,
secciones y pie caen sobre la misma línea izquierda y derecha.

La cabecera es una **píldora flotante** `sticky`, no una barra: ancho del
contenedor, centrada, separada del canto superior.

Rejilla del catálogo: `repeat(var(--cols), 1fr)` → 2 columnas por debajo de
1000 px → 1 columna por debajo de 560. En móvil la tarjeta se ve grande a
propósito: el producto es lo que hay que juzgar.

## Movimiento

Un solo momento orquestado, no efectos sueltos. Las tarjetas entran en orden de
lectura, **una vez** al cargar: `--i` por tarjeta y `animation-delay: calc(var(--i) * 70ms)`,
desde `translateY(18px)` y opacidad 0, con `--ease: cubic-bezier(.22,1,.36,1)`.
Todo bajo `prefers-reduced-motion: no-preference`.

Los hover son suaves y cortos (`--t: .28s`): la tarjeta sube 6 px y sube de
sombra, la foto escala 1.04.

El scroll lo lleva **Lenis** (`window.DropScentsLenis`). Consecuencia práctica
al depurar: `window.scrollTo` no mueve nada.

## Las superficies que no dibuja nadie

Selección, cursor, barra de scroll y anillo de foco están vestidos desde la
paleta. Es lo más barato que distingue una página construida de una ensamblada.

- selección: `--punch` con texto blanco
- `accent-color: var(--punch)`, `caret-color: var(--ink)`
- scrollbar delgada, pulgar `rgba(43,15,51,.22)` redondeado, pista transparente
- foco: `2px solid var(--punch)` con `outline-offset: 3px` y radio `--r-sm`

## Las fotos de producto

Vienen del comerciante **con fondo blanco**, no recortadas. Un rectángulo
blanco encima del tinte lo parte por la mitad, así que la foto lleva
`mix-blend-mode: multiply` y su contenedor `isolation: isolate`. `object-fit:
contain` siempre: el frasco y su caja se ven enteros, que es justo lo que hay
que poder juzgar.

## Lo que este tema no hace

- **No hay antetítulos.** El titular se sostiene solo. El ajuste existe sin
  valor por defecto por si el comerciante quiere uno.
- **No hay prueba social.** El negocio aún no ha lanzado y no tiene clientes;
  la sección que enviaba testimonios inventados se eliminó.
- **No se repite el catálogo** en la portada.
- **No hay esquinas vivas, ni sombras negras, ni degradados en el texto.**

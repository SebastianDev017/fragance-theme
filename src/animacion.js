/* ===========================================================================
   La capa de movimiento

   Lo que hay aquí no es decoración suelta: cada pieza tiene un trabajo.

     · el titular que se descubre línea a línea  → jerarquía, dice por dónde
       empieza a leerse la sección;
     · la tira que se puede tirar con el ratón   → en el escritorio no hay
       gesto de arrastre, y una tira que sólo avanza con flechas se recorre
       la mitad;
     · el botón que se acerca al puntero         → confirma que es el sitio
       donde hay que pulsar antes de pulsarlo;
     · el frasco que vuela al carrito            → la única respuesta que dice
       «sí, se añadió» sin escribir un cartel.

   Todo esto se apaga entero con `prefers-reduced-motion`, y lo que necesita
   puntero fino (el arrastre, el imán) no se monta siquiera en táctil.

   Los plugins de GSAP se importan arriba: desde la versión 3.13 dejaron de
   estar detrás del club, así que SplitText, Draggable, Inertia y Flip entran
   en el bundle como cualquier otro.
   =========================================================================== */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin, Flip);

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const REDUCIDO = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const PUNTERO_FINO = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------------------------------------------------------------------------
   1. los titulares se descubren línea a línea

   `mask: 'lines'` envuelve cada línea en su propia caja recortada, así que la
   línea sube desde debajo del corte en vez de aparecer flotando en el aire:
   se lee como algo que se descubre, no como algo que se enciende.

   `autoSplit` vuelve a partir el texto cuando cambian las fuentes o el ancho
   de la ventana — sin eso, un titular partido antes de que cargue Clash
   Display se queda con las líneas del tipo de respaldo.
   --------------------------------------------------------------------------- */

const TITULARES = '.h2, .portada__h, .pdp__titulo-riel, .indice__h1';

function titulares(raiz = document) {
  if (REDUCIDO) return;

  $$(TITULARES, raiz).forEach((el) => {
    if (el.dataset.partido) return;
    /* Un titular que ya lleva dos capas recortadas por dentro (`.partido`) no
       se toca: partirlo otra vez desalinea el corte de color. */
    if (el.classList.contains('partido')) return;
    el.dataset.partido = '1';

    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      linesClass: 'linea-partida',
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 108,
          opacity: 0,
          duration: 1.05,
          ease: 'expo.out',
          stagger: 0.085,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      },
    });
  });
}

/* ---------------------------------------------------------------------------
   2. las tiras se pueden tirar con el ratón

   La pista es un contenedor de scroll de verdad, así que Draggable trabaja
   sobre su `scrollLeft` (`type: 'scrollLeft'`) en vez de moverla con un
   transform: el teclado, el dedo y el lector de pantalla la siguen
   recorriendo igual, y si esto no se monta no se pierde nada.

   Sólo con puntero fino. En táctil el arrastre nativo ya existe y meter
   Draggable encima le quita la inercia del sistema, que es mejor que la
   nuestra.

   El detalle que nadie prueba: la tarjeta entera es un enlace. Sin cancelar
   el clic que cierra un arrastre, soltar la tira te lleva a la ficha del
   producto que quedó debajo del puntero.
   --------------------------------------------------------------------------- */

const arrastres = new WeakMap();
const pistas = new Set();

/** Monta o desmonta el arrastre según si la tira tiene de verdad recorrido.
 *  Se vuelve a preguntar al cambiar el ancho: un carrusel de tres tarjetas
 *  desborda en una ventana estrecha y no desborda en una ancha, y un `grab`
 *  sobre algo que no se mueve promete lo que no hay.
 *
 *  OJO con `Draggable` de tipo `scrollLeft`: para poder arrastrar el scroll
 *  de un contenedor, GSAP le ENVUELVE el contenido en un `<div>` propio. Aquí
 *  la pista es un `<ul>` en `display: flex` y sus `<li>` llevan el ancho de
 *  la tarjeta en `flex-basis`; con un `<div>` en medio dejan de ser hijos del
 *  flex, pierden el ancho y el carrusel entero colapsa en UNA tarjeta del
 *  tamaño de la pantalla. Y de paso se rompe la lista para el lector.
 *
 *  Por eso se arrastra un elemento SUELTO —que nunca entra en el documento— y
 *  su posición se copia al `scrollLeft` de la pista. La inercia sigue siendo
 *  la de GSAP y el DOM no se toca.
 */
function revisarTira(pista) {
  const puede = pista.scrollWidth - pista.clientWidth >= 40;
  const ya = arrastres.get(pista);

  if (puede && !ya) {
    const tirador = document.createElement('div');
    const tope = () => Math.max(pista.scrollWidth - pista.clientWidth, 0);
    const copiar = function copiar() { pista.scrollLeft = -this.x; };

    const [instancia] = Draggable.create(tirador, {
      type: 'x',
      trigger: pista,
      inertia: true,
      dragClickables: true,
      allowNativeTouchScrolling: true,
      cursor: 'grab',
      activeCursor: 'grabbing',
      onPress() {
        gsap.set(tirador, { x: -pista.scrollLeft });
        this.update();
        /* Los límites se recalculan en cada toque: entre uno y otro pueden
           haber cambiado el ancho de la ventana o el número de tarjetas. */
        this.applyBounds({ minX: -tope(), maxX: 0 });
        pista.dataset.arrastrado = '0';
      },
      onDrag() {
        copiar.call(this);
        pista.dataset.arrastrado = String(
          Math.max(Number(pista.dataset.arrastrado || 0), Math.abs(this.deltaX))
        );
      },
      onThrowUpdate() { copiar.call(this); },
    });
    arrastres.set(pista, instancia);
  } else if (!puede && ya) {
    ya.kill();
    arrastres.delete(pista);
    pista.style.cursor = '';
  }
}

function tirar(raiz = document) {
  if (REDUCIDO || !PUNTERO_FINO) return;

  $$('[data-carrusel-pista]', raiz).forEach((pista) => {
    /* El recorrido gobierna la posición desde el scroll de la página: dos
       manos en el mismo volante. */
    if (pista.closest('[data-recorrido]')) return;

    if (!pistas.has(pista)) {
      pistas.add(pista);
      /* El detalle que nadie prueba: la tarjeta entera es un enlace. Sin
         cancelar el clic que cierra un arrastre, soltar la tira te lleva a la
         ficha del producto que quedó debajo del puntero. */
      pista.addEventListener('click', (e) => {
        if (Number(pista.dataset.arrastrado || 0) > 6) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);
    }
    revisarTira(pista);
  });
}

/* Se vuelve a mirar cuando el ancho de las tarjetas ya es el definitivo: con
   las fuentes puestas y las fotos medidas, no antes. */
if (!REDUCIDO && PUNTERO_FINO) {
  let temporizador = null;
  const repasar = () => {
    clearTimeout(temporizador);
    temporizador = setTimeout(() => pistas.forEach(revisarTira), 150);
  };
  window.addEventListener('resize', repasar);
  window.addEventListener('load', repasar);
  document.fonts?.ready.then(repasar);
}

/* ---------------------------------------------------------------------------
   3. el imán de los botones

   Un desplazamiento corto, no de veinte píxeles: lo suficiente para que la
   mano note que el botón responde, no tanto como para tener que perseguirlo.
   Se apaga en cuanto el puntero sale, y no existe en táctil.
   --------------------------------------------------------------------------- */

const IMANES = '.btn--lg, .carrusel__flecha, .marq__flecha';

function imanes(raiz = document) {
  if (REDUCIDO || !PUNTERO_FINO) return;

  $$(IMANES, raiz).forEach((boton) => {
    if (boton.dataset.iman) return;
    boton.dataset.iman = '1';

    const x = gsap.quickTo(boton, 'x', { duration: 0.45, ease: 'power3.out' });
    const y = gsap.quickTo(boton, 'y', { duration: 0.45, ease: 'power3.out' });

    boton.addEventListener('pointermove', (e) => {
      const r = boton.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.2);
      y((e.clientY - (r.top + r.height / 2)) * 0.2);
    });
    boton.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

/* ---------------------------------------------------------------------------
   4. el frasco vuela al carrito

   Se llama desde el carrito justo antes de mandar el «añadir». `Flip.fit`
   calcula la transformación exacta que lleva del sitio de la foto al icono
   del header, así que el vuelo acaba clavado en el destino aunque el header
   sea fijo o la página esté a media altura.

   Es un clon: la foto original no se mueve de su sitio ni un píxel, y si algo
   falla a mitad de camino el clon se borra y no queda rastro.
   --------------------------------------------------------------------------- */

export function volarAlCarrito(origen) {
  if (REDUCIDO || !origen) return;

  const destino = $('[data-abrir-carrito]');
  const foto = origen.matches?.('img') ? origen : $('img', origen);
  if (!destino || !foto || !foto.getBoundingClientRect().width) return;

  const clon = foto.cloneNode(true);
  clon.removeAttribute('loading');
  clon.removeAttribute('sizes');
  clon.setAttribute('aria-hidden', 'true');
  /* `fixed` y NO `absolute`: los dos extremos del vuelo se miden con
     `getBoundingClientRect`, que da coordenadas de VENTANA. Con el clon
     absoluto, añadir al carrito a media página lo manda a la altura del
     documento y el frasco sale volando fuera de la pantalla. */
  Object.assign(clon.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '90',
    margin: '0',
    pointerEvents: 'none',
    borderRadius: '18px',
    objectFit: 'contain',
  });
  document.body.appendChild(clon);

  /* Dos llamadas a `Flip.fit`: la primera coloca el clon EXACTAMENTE encima
     de la foto (sin duración, instantánea) y la segunda devuelve el tween que
     lo lleva hasta el icono del carrito. Es la forma idiomática, y la que
     acierta el destino aunque la cabecera sea fija. */
  Flip.fit(clon, foto, { scale: true });

  gsap.timeline({ onComplete: () => clon.remove() })
    .add(Flip.fit(clon, destino, {
      scale: true, duration: 0.72, ease: 'power2.inOut',
    }), 0)
    .to(clon, { opacity: 0.12, duration: 0.26, ease: 'power2.in' }, 0.46)
    .fromTo(destino, { scale: 1 }, {
      scale: 1.16, duration: 0.16, yoyo: true, repeat: 1, ease: 'power2.out',
    }, 0.64);
}

/* ---------------------------------------------------------------------------
   5. el carrito se llena de arriba abajo

   Cuando el cajón se abre, las líneas entran una detrás de otra. No es
   adorno: el cajón se repinta ENTERO en cada cambio (lo recalcula Liquid), y
   sin nada que marque el orden, un carrito de cinco líneas aparece de golpe y
   cuesta ver cuál acaba de cambiar. Entrando en orden, la vista sigue sola la
   línea nueva.

   Se llama desde el carrito después de cada repintado.
   --------------------------------------------------------------------------- */

export function entrarCarrito(panel) {
  if (REDUCIDO || !panel) return;
  const piezas = $$('.dlinea, .envio, .bundles', panel);
  if (!piezas.length) return;
  gsap.from(piezas, {
    opacity: 0,
    y: 14,
    duration: 0.5,
    ease: 'power3.out',
    stagger: 0.05,
    overwrite: true,
  });
}

/* ---------------------------------------------------------------------------
   arranque
   --------------------------------------------------------------------------- */

export function conectarAnimacion(raiz = document) {
  titulares(raiz);
  tirar(raiz);
  imanes(raiz);
}

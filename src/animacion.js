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

function tirar(raiz = document) {
  if (REDUCIDO || !PUNTERO_FINO) return;

  $$('[data-carrusel-pista]', raiz).forEach((pista) => {
    if (pista.dataset.tirable) return;
    /* El recorrido gobierna la posición desde el scroll de la página: dos
       manos en el mismo volante. */
    if (pista.closest('[data-recorrido]')) return;
    if (pista.scrollWidth - pista.clientWidth < 40) return;
    pista.dataset.tirable = '1';

    let arrastrado = 0;

    Draggable.create(pista, {
      type: 'scrollLeft',
      inertia: true,
      dragClickables: true,
      cursor: 'grab',
      activeCursor: 'grabbing',
      onPress() { arrastrado = 0; },
      onDrag() { arrastrado = Math.max(arrastrado, Math.abs(this.deltaX)); },
    });

    pista.addEventListener('click', (e) => {
      if (arrastrado > 6) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  });
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
  Object.assign(clon.style, {
    position: 'fixed',
    zIndex: '90',
    margin: '0',
    pointerEvents: 'none',
    borderRadius: '18px',
    objectFit: 'contain',
  });
  document.body.appendChild(clon);
  Flip.fit(clon, foto, { absolute: true });

  const r = destino.getBoundingClientRect();
  gsap.timeline({ onComplete: () => clon.remove() })
    .to(clon, {
      duration: 0.7,
      ease: 'power2.in',
      left: r.left + r.width / 2,
      top: r.top + r.height / 2,
      width: 26,
      height: 26,
      xPercent: -50,
      yPercent: -50,
      opacity: 0.15,
      rotate: 12,
    })
    .fromTo(destino, { scale: 1 }, {
      scale: 1.16, duration: 0.16, yoyo: true, repeat: 1, ease: 'power2.out',
    }, '-=0.12');
}

/* ---------------------------------------------------------------------------
   arranque
   --------------------------------------------------------------------------- */

export function conectarAnimacion(raiz = document) {
  titulares(raiz);
  tirar(raiz);
  imanes(raiz);
}

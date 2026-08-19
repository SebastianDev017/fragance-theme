/* ===========================================================================
   El recorrido: la tira avanza con el scroll de la página

   Se enciende por sección desde el editor («Cómo avanza» → «Con el scroll de
   la página») y lo que hace es sencillo de decir y fácil de hacer mal: la
   sección se queda clavada en la ventana y el scroll vertical se traduce en
   avance horizontal de la tira, así que seguir bajando es seguir viendo
   colección.

   Tres decisiones que importan:

   1. Se mueve el `scrollLeft` de la pista, NO un `transform`. La pista sigue
      siendo un contenedor de scroll de verdad, así que el teclado, el dedo y
      el lector de pantalla la recorren igual si el JavaScript no llega o si
      se decide desmontar el efecto. Un `transform` habría dejado la lista
      inalcanzable por cualquier otro medio.

   2. Sólo en pantalla ancha y sin movimiento reducido. En el móvil una tira
      que secuestra el scroll pelea contra el único gesto que tiene el pulgar,
      y ahí el arrastre de toda la vida es mejor; con `matchMedia` de GSAP el
      efecto se monta y se DESMONTA solo al cruzar el umbral.

   3. Si no hay recorrido que hacer —tres tarjetas en una pantalla ancha— no
      se engancha nada. Clavar una sección para no mover nada es la peor
      versión de este efecto.

   El `scroll-snap` se apaga mientras el recorrido manda: tira de la pista
   hacia la tarjeta más cercana y con el scroll gobernando la posición eso se
   siente como un tirón en cada paso.
   =========================================================================== */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* Por debajo de esto no compensa clavar la sección. */
const MINIMO = 80;

const montados = new WeakMap();

export function conectarRecorrido(raiz = document) {
  $$('[data-recorrido]', raiz).forEach((carrusel) => {
    if (montados.has(carrusel)) return;

    const pista = $('[data-carrusel-pista]', carrusel);
    const seccion = carrusel.closest('.carrusel-sec');
    if (!pista || !seccion) return;

    const mm = gsap.matchMedia();
    montados.set(carrusel, mm);

    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const largo = () => Math.max(pista.scrollWidth - pista.clientWidth, 0);
      if (largo() < MINIMO) return;

      seccion.classList.add('is-recorrido');

      /* La cabecera es FIJA: clavar la sección en `top: 0` la mete debajo y el
         titular sale cortado por la píldora. Se clava justo por debajo, y el
         hueco es el mismo token que usa el documento — si mañana crece la
         barra, esto crece con ella.

         OJO: `--nav-hueco` NO se puede leer del `:root`. Una propiedad
         personalizada devuelve su TEXTO, no un valor calculado, así que ahí
         `getPropertyValue` da la cadena `clamp(5.4rem, 9vh, 7rem)` y
         `parseFloat` la convierte en NaN. El mismo número, ya resuelto a
         píxeles, está en el `padding-top` del `body`, que es justo el hueco
         que el documento le deja a la barra. */
      const hueco = () => Math.round(
        parseFloat(getComputedStyle(document.body).paddingTop) || 0
      );

      /* La posición la fija SIEMPRE el progreso del trigger, también al
         refrescar: si no, al volver a la página a media altura la tira
         aparece al principio y el resto del recorrido queda muerto. */
      const colocar = (self) => { pista.scrollLeft = self.progress * largo(); };

      const st = ScrollTrigger.create({
        trigger: seccion,
        start: () => `top ${hueco()}`,
        end: () => `+=${Math.max(largo(), 1)}`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: colocar,
        onRefresh: colocar,
      });

      return () => {
        st.kill();
        seccion.classList.remove('is-recorrido');
        pista.scrollLeft = 0;
      };
    });
  });
}

/** El editor de temas repinta secciones enteras: lo de antes ya no existe. */
export function soltarRecorrido(raiz = document) {
  $$('[data-recorrido]', raiz).forEach((carrusel) => {
    const mm = montados.get(carrusel);
    if (mm) { mm.revert(); montados.delete(carrusel); }
  });
}

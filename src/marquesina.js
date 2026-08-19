/* ===========================================================================
   Las flechas del carrusel de la portada

   La pista corre con una animación de CSS, no con JavaScript. Para empujarla
   a mano sin apagar el bucle se toca el `animation-delay`: ese valor es el que
   decide EN QUÉ PUNTO de la vuelta está la animación, así que restarle tiempo
   la adelanta y sumárselo la retrasa. Al soltar, sigue corriendo desde donde
   quedó en vez de saltar al principio, que es lo que pasaría si se reiniciara
   la animación o se escribiera un `transform` encima.

   El bucle es de dos copias con `translateX(-50%)`, así que la vuelta entera
   equivale a UNA copia: avanzar «una tarjeta» es avanzar la fracción de la
   duración que esa tarjeta ocupa dentro de la copia.
   =========================================================================== */

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => Array.from(raiz.querySelectorAll(sel));

export function conectarMarquesina() {
  $$('.marquesina').forEach((marq) => {
    const pista = $('[data-marq-pista]', marq);
    const flechas = $$('[data-marq-paso]', marq);
    if (!pista || !flechas.length) return;

    /* Sin animación (movimiento reducido, o el modo rejilla) las flechas no
       tienen nada que empujar: la pista se recorre con scroll. */
    const dur = parseFloat(getComputedStyle(pista).animationDuration);
    if (!dur) {
      flechas.forEach((f) => { f.hidden = true; });
      return;
    }

    const grupo = $('.marquesina__grupo', marq);
    const items = $$('.marquesina__item', grupo);
    if (!items.length) return;

    /* Cuánto tiempo de la vuelta ocupa una tarjeta. */
    const anchoGrupo = grupo.getBoundingClientRect().width;
    const anchoItem = items[0].getBoundingClientRect().width
      + parseFloat(getComputedStyle(grupo).gap || 0);
    const salto = dur * (anchoItem / anchoGrupo);

    let desfase = 0;
    flechas.forEach((f) => {
      f.addEventListener('click', () => {
        /* Restar adelanta la animación: la flecha «siguiente» mueve la pista
           en el mismo sentido en el que ya venía. */
        desfase -= Number(f.dataset.marqPaso) * salto;
        pista.style.animationDelay = `${desfase}s`;
      });
    });

    /* Mientras se usan las flechas la pista se queda quieta, si no el empujón
       pelea con el movimiento y se lee como un tirón. Vuelve a correr cuando
       el puntero se va, que es la misma regla que ya tenía el hover. */
    marq.addEventListener('pointerdown', () => { pista.style.animationPlayState = 'paused'; });
    marq.addEventListener('pointerleave', () => { pista.style.animationPlayState = ''; });
  });
}

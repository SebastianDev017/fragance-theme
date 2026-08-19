/* ---------------------------------------------------------------------------
   DropScents — comportamiento de la interfaz.

   Este módulo NO conoce el catálogo. Lee todo del DOM (atributos data-*), así
   sirve igual cuando el HTML lo escribe Liquid desde productos reales de
   Shopify que cuando lo escribe la maqueta local.

   Reparto:
     - Liquid/HTML  → qué se muestra
     - este archivo → cómo se comporta y cómo se mueve
--------------------------------------------------------------------------- */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { conectarChat, conectarDrawer, conectarTienda, abrirChat } from './tienda.js';
import { conectarRecorrido, soltarRecorrido } from './recorrido.js';
import { conectarAnimacion } from './animacion.js';

gsap.registerPlugin(ScrollTrigger);

export { abrirChat };

export const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const $ = (s, c = document) => c.querySelector(s);
export const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ===========================================================================
   dinero
   ---------------------------------------------------------------------------
   Shopify da los precios en céntimos y el formato en `shop.money_format`.
   Se replica aquí lo justo para poder animar los números al cambiar de
   fragancia; si no hay formato declarado, cae en dólares sin decimales.
   =========================================================================== */

const sinDecimales = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const conDecimales = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function formatearDinero(centimos, formato) {
  const v = Number(centimos) / 100;
  if (!formato) return `$${sinDecimales.format(Math.round(v))}`;
  return formato.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, token) => {
    switch (token) {
      case 'amount':
      case 'amount_with_comma_separator':
        return conDecimales.format(v);
      case 'amount_no_decimals':
      case 'amount_no_decimals_with_comma_separator':
      default:
        return sinDecimales.format(Math.round(v));
    }
  });
}

/* ===========================================================================
   1. el chat
   ---------------------------------------------------------------------------
   Vive en tienda.js: todos los botones [data-chat] de todas las páginas
   llaman a la misma función, y quien decide a qué app hablar es ese módulo.
   =========================================================================== */

/* ===========================================================================
   2. comparador
   ---------------------------------------------------------------------------
   Cada chip trae los precios de su fragancia en atributos data-*, en céntimos.
   El envío de afuera es un ajuste de la sección (data-envio-afuera).
   =========================================================================== */

function conectarComparador() {
  const picker = $('.picker');
  const compare = $('#compare');
  if (!picker || !compare) return;

  const formato = compare.dataset.moneyFormat || '';
  /* El courier por defecto es de la sección, pero cada pestaña puede traer el
     suyo (data-envio): hay fragancias que pesan y salen más caras de traer. */
  const envioSeccion = Number(compare.dataset.envioAfuera || 0);
  const out = {};
  $$('[data-f]', compare).forEach((el) => { out[el.dataset.f] = el; });

  /** anima un número de un valor a otro */
  function setNum(el, centimos, animar) {
    if (!el) return;
    const from = Number(el.dataset.centimos ?? centimos);
    el.dataset.centimos = centimos;
    if (!animar || REDUCED || from === centimos) {
      el.textContent = formatearDinero(centimos, formato);
      return;
    }
    const o = { v: from };
    gsap.to(o, {
      v: centimos, duration: 0.55, ease: 'power2.out',
      onUpdate: () => { el.textContent = formatearDinero(o.v, formato); },
    });
  }

  function pintar(chip, animar = true) {
    const d = chip.dataset;
    const full = Number(d.full || 0);
    const envioAfuera = Number(d.envio || 0) || envioSeccion;
    if (out.name) out.name.textContent = d.nombre || '';
    if (out.name2) out.name2.textContent = d.nombre || '';
    setNum(out.d5, Number(d.d5 || 0), animar);
    setNum(out.d10, Number(d.d10 || 0), animar);
    setNum(out.full, full, animar);
    setNum(out.full2, full, animar);
    setNum(out.ship, envioAfuera, animar);
    setNum(out.totalUs, full, animar);
    setNum(out.totalThem, full + envioAfuera, animar);
    if (out.link) out.link.href = d.url || '#';
  }

  /* Las pestañas son pestañas de verdad: una sola entra en el orden de
     tabulación y entre ellas se anda con las flechas. Es lo que espera quien
     oye «pestaña 1 de 6», y sin ello el patrón está a medias — que es peor
     que no usarlo, porque promete un teclado que no responde. */
  const chips = $$('.chip', picker);

  function elegir(chip, animar = true, mover = true) {
    chips.forEach((c) => {
      const activo = c === chip;
      c.setAttribute('aria-selected', String(activo));
      c.tabIndex = activo ? 0 : -1;
    });
    if (chip.id) compare.setAttribute('aria-labelledby', chip.id);
    if (mover) chip.focus();
    pintar(chip, animar);
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => elegir(chip, true, false));
    chip.addEventListener('keydown', (e) => {
      const i = chips.indexOf(chip);
      let j = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % chips.length;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i - 1 + chips.length) % chips.length;
      else if (e.key === 'Home') j = 0;
      else if (e.key === 'End') j = chips.length - 1;
      if (j === null) return;
      e.preventDefault();
      elegir(chips[j]);
    });
  });

  const inicial = chips.find((c) => c.getAttribute('aria-selected') === 'true') || chips[0];
  if (inicial) elegir(inicial, false, false);
}

/* ===========================================================================
   3. fotos que faltan
   =========================================================================== */

function conectarFotos() {
  /* Si una foto no carga se pone la silueta neutra en su sitio, en vez de
     dejar el icono de imagen rota del navegador. */
  $$('.card__slide, .pdp__img').forEach((img) => {
    const marcar = () => {
      if (img.parentElement.querySelector('.card__sinfoto')) return;
      const hueco = document.createElement('span');
      hueco.className = 'card__sinfoto';
      hueco.setAttribute('aria-hidden', 'true');
      img.parentElement.appendChild(hueco);
      img.style.display = 'none';
    };
    img.addEventListener('error', marcar);
    if (img.complete && img.naturalWidth === 0) marcar();
  });
}

/* ===========================================================================
   4. scroll suave
   =========================================================================== */

export let lenis = null;

function conectarScroll() {
  if (!REDUCED) {
    lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    window.DropScentsLenis = lenis;   // el editor de temas y el QA lo necesitan
  }

  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = id === '#top' ? 0 : $(id);
      if (!target && target !== 0) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -72, duration: 1.15 });
      else window.scrollTo({ top: target === 0 ? 0 : target.offsetTop - 72 });
    });
  });
}

/* ===========================================================================
   5. coreografía — cada sección entra distinto a propósito
   =========================================================================== */

function conectarMovimiento() {
  if (REDUCED) return;

  if ($('[data-hero-in]')) {
    gsap.set('[data-hero-in]', { opacity: 0, y: 26 });
    gsap.timeline({ delay: 0.15 }).to('[data-hero-in]', {
      opacity: 1, y: 0, duration: 1.05, ease: 'expo.out', stagger: 0.055,
    });
  }

  /* ritual: los escalones llegan desde lados distintos y siguen derivando.
     El desfase lateral sólo en desktop: en móvil un x:±50 saca las tarjetas de
     la pantalla y aparece scroll horizontal. */
  if ($('.step')) {
    gsap.matchMedia().add(
      { ancho: '(min-width: 900px)', angosto: '(max-width: 899px)' },
      (ctx) => {
        const dx = ctx.conditions.ancho ? 50 : 0;
        $$('.step').forEach((step, i) => {
          gsap.from(step, {
            opacity: 0, y: 70,
            x: i === 1 ? dx : -dx,
            rotate: dx ? (i === 1 ? 1.6 : -1.6) : 0,
            duration: 1.1, ease: 'expo.out',
            scrollTrigger: { trigger: step, start: 'top 88%' },
          });
          gsap.to(step, {
            yPercent: -6 - i * 5, ease: 'none',
            scrollTrigger: { trigger: '.steps', start: 'top bottom', end: 'bottom top', scrub: 1 },
          });
        });
      }
    );
  }

  /* cuenta: las dos columnas se separan como si abrieras una carpeta */
  if ($('.compare')) {
    gsap.from('.compare__col--us', {
      opacity: 0, xPercent: 4, scale: 0.97, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: '.compare', start: 'top 82%' },
    });
    gsap.from('.compare__col--them', {
      opacity: 0, xPercent: -4, scale: 0.97, duration: 1, ease: 'expo.out', delay: 0.08,
      scrollTrigger: { trigger: '.compare', start: 'top 82%' },
    });
    gsap.from('.chip', {
      opacity: 0, y: 14, duration: 0.6, ease: 'power3.out', stagger: 0.045,
      scrollTrigger: { trigger: '.picker', start: 'top 90%' },
    });
  }

  /* estantería: entran por lotes, como una repisa que se va llenando.

     `fromTo` y no `from`, y `once`. Con `from`, GSAP toma el estado ACTUAL
     como destino; si el lote se vuelve a disparar a mitad de la entrada —y se
     dispara, porque cualquier `ScrollTrigger.refresh()` (las fuentes al
     cargar, SplitText al repartir líneas) lo provoca— el nuevo tween guarda
     como destino un estado intermedio y la tarjeta se queda ahí para siempre:
     53 px más abajo y al 97 %, desalineada con sus vecinas.

     `clearProps: 'transform'` es la otra mitad del arreglo: GSAP deja un
     `transform` en el atributo `style`, y un estilo inline gana a la regla
     `.tarjeta:hover { transform: translateY(-6px) }`. Sin limpiarlo, las
     tarjetas dejan de levantarse al pasar por encima en cuanto entran. */
  if ($('[data-reveal-card]')) {
    ScrollTrigger.batch('[data-reveal-card]', {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => gsap.fromTo(batch,
        { opacity: 0, y: 46, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.85, ease: 'expo.out', stagger: 0.07,
          overwrite: 'auto', clearProps: 'transform',
        }),
    });
  }

  /* hablemos claro: las líneas se abren de izquierda a derecha */
  $$('.qa__item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0, x: -24, duration: 0.7, ease: 'power3.out', delay: i * 0.03,
      scrollTrigger: { trigger: item, start: 'top 92%' },
    });
  });

  /* voces: los mensajes caen como en un chat, uno detrás de otro */
  if ($('.bubble')) {
    gsap.from('.bubble', {
      opacity: 0, y: 26, scale: 0.92, transformOrigin: 'bottom center',
      duration: 0.6, ease: 'back.out(1.6)', stagger: 0.13,
      scrollTrigger: { trigger: '.chat', start: 'top 82%' },
    });
  }

  if ($('.cierre__card')) {
    gsap.from('.cierre__card', {
      opacity: 0, scale: 0.96, y: 40, duration: 1.1, ease: 'expo.out',
      scrollTrigger: { trigger: '.cierre', start: 'top 85%' },
    });
  }

}

/* ===========================================================================
   6. nav
   =========================================================================== */

function conectarNav() {
  const nav = $('#nav');
  if (!nav) return;
  ScrollTrigger.create({
    start: 'top -60',
    end: 99999,
    onToggle: (self) => nav.classList.toggle('is-stuck', self.isActive),
  });
}

/* ===========================================================================
   arranque
   =========================================================================== */

export function iniciar() {
  /* La portada abre con la muralla repartiéndose: si el navegador restaura el
     scroll a media página, el reparto ocurre fuera de la vista. */
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  window.addEventListener('pageshow', () => window.scrollTo(0, 0));

  conectarChat();
  conectarDrawer();
  conectarComparador();
  conectarFotos();
  conectarScroll();     // deja window.DropScentsLenis listo para el drawer
  conectarTienda();
  conectarMovimiento();
  conectarNav();

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}

/** El editor de temas de Shopify recarga secciones sin recargar la página:
 *  hay que rehacer los cálculos de scroll y volver a conectar lo que se
 *  acaba de repintar. */
export function conectarEditorDeTemas() {
  if (!window.Shopify?.designMode) return;
  document.addEventListener('shopify:section:load', (e) => {
    /* La sección se ha vuelto a pintar entera: sus galerías, carruseles y
       selectores son elementos NUEVOS y no tienen ningún listener. */
    conectarTienda(e.target);
    conectarComparador();
    conectarFotos();
    conectarRecorrido(e.target);
    conectarAnimacion(e.target);
    ScrollTrigger.refresh();
  });
  document.addEventListener('shopify:section:unload', (e) => {
    /* El recorrido deja la sección clavada con un espaciador: si se retira la
       sección sin desmontarlo, queda el hueco y el resto de la página se
       calcula mal. */
    soltarRecorrido(e.target);
    ScrollTrigger.refresh();
  });
}

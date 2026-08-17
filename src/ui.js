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

gsap.registerPlugin(ScrollTrigger);

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
   Todos los botones [data-chat] llaman aquí. El plugin real se conecta
   definiendo `window.DropScentsChat = () => miPlugin.abrir()`. Mientras tanto
   se prueban las APIs de los plugins más comunes y, si no hay ninguno, se
   avisa en vez de dejar un botón muerto.
   =========================================================================== */

export function abrirChat() {
  if (typeof window.DropScentsChat === 'function') { window.DropScentsChat(); return; }
  if (window.$crisp) { window.$crisp.push(['do', 'chat:open']); return; }
  if (window.Tawk_API?.maximize) { window.Tawk_API.maximize(); return; }
  if (window.tidioChatApi?.open) { window.tidioChatApi.open(); return; }
  if (window.Intercom) { window.Intercom('show'); return; }
  if (window.zE) { window.zE('messenger', 'open'); return; }
  if (window.Shopify?.chat?.open) { window.Shopify.chat.open(); return; }
  aviso();
}

let avisoTO = 0;
function aviso() {
  let t = $('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    const ig = document.documentElement.dataset.instagram || 'https://instagram.com/dropscents';
    t.innerHTML = `El chat todavía no está conectado.
      <a href="${ig}" target="_blank" rel="noopener">Escríbenos por Instagram</a>`;
    document.body.appendChild(t);
  }
  requestAnimationFrame(() => t.classList.add('is-on'));
  clearTimeout(avisoTO);
  avisoTO = setTimeout(() => t.classList.remove('is-on'), 6000);
}

function conectarChat() {
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-chat]');
    if (!b) return;
    e.preventDefault();
    abrirChat();
  });
}

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
  const envioAfuera = Number(compare.dataset.envioAfuera || 0);
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

  const chips = $$('.chip', picker);
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      pintar(chip);
    });
  });

  const inicial = chips.find((c) => c.getAttribute('aria-pressed') === 'true') || chips[0];
  if (inicial) pintar(inicial, false);
}

/* ===========================================================================
   3. fotos que faltan
   =========================================================================== */

function conectarFotos() {
  $$('.card__shot img').forEach((img) => {
    const marcar = () => img.parentElement.classList.add('is-empty');
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

  /* estantería: entran por lotes, como una repisa que se va llenando */
  if ($('[data-reveal-card]')) {
    ScrollTrigger.batch('[data-reveal-card]', {
      start: 'top 92%',
      onEnter: (batch) => gsap.from(batch, {
        opacity: 0, y: 46, scale: 0.97,
        duration: 0.85, ease: 'expo.out', stagger: 0.07, overwrite: true,
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

  /* el campo de color deriva lentísimo con el scroll */
  if ($('.field__blob--lav')) {
    gsap.to('.field__blob--lav', {
      yPercent: -18, ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 2 },
    });
    gsap.to('.field__blob--sky', {
      yPercent: -30, ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 2 },
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
   7. hero fijado + escena 3D
   ---------------------------------------------------------------------------
   Three.js va en su propio chunk y se carga sin bloquear el resto, para que el
   titular y el campo de color estén listos antes.
   =========================================================================== */

/* Cómo se carga la escena 3D: lo decide quien arranca, no este módulo.
   Es a propósito. Si aquí apareciera `import('./scene.js')`, el bundler del
   tema empaquetaría Three.js dentro del bundle de la interfaz aunque en
   Shopify la escena se cargue desde su propio asset — y entonces todas las
   páginas de la tienda cargarían el 3D sin usarlo. */
let cargarEscena = null;

async function conectarHero() {
  const canvas = $('#scene');
  if (!canvas) return;

  if (!cargarEscena) return;
  const { createScene } = await cargarEscena();
  const scene = createScene(canvas, { reducedMotion: REDUCED });
  window.addEventListener('resize', () => {
    scene.resize();
    if (REDUCED) scene.render();   // sin bucle de render hay que repintar
  });

  if (!REDUCED) {
    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '+=185%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => scene.timeline.progress(self.progress),
        invalidateOnRefresh: true,
        // se crea después de los demás por el import dinámico, pero está
        // primero en la página: sin esto el pin recalcularía fuera de orden
        refreshPriority: -1,
      },
    });
    // fromTo + immediateRender:false es obligatorio: a estos elementos también
    // los anima la entrada del hero, y un .to() capturaría el opacity:0 inicial
    hero
      .fromTo('.hero__lead',
        { opacity: 1, y: 0, filter: 'blur(0px)' },
        { opacity: 0, y: -70, filter: 'blur(8px)', duration: 0.22, ease: 'power2.in', immediateRender: false }, 0.06)
      .fromTo('.hero__scroll',
        { opacity: 1 },
        { opacity: 0, duration: 0.08, immediateRender: false }, 0.02)
      .fromTo('.hero__final',
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.16, ease: 'power2.out' }, 0.74)
      .to({}, { duration: 0.01 }, 0.99);
  }

  ScrollTrigger.refresh();   // el pin cambia la altura del documento
  return scene;
}

/* ===========================================================================
   arranque
   =========================================================================== */

let escena = null;

export function iniciar(opciones = {}) {
  cargarEscena = opciones.cargarEscena || null;

  /* El hero va fijado: si el navegador restaura el scroll a media página, el
     pin arranca a mitad de la animación y el sitio parece roto. */
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  window.addEventListener('pageshow', () => window.scrollTo(0, 0));

  conectarChat();
  conectarComparador();
  conectarFotos();
  conectarScroll();
  conectarMovimiento();
  conectarNav();

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  conectarHero().then((s) => { escena = s; });
}

/** El editor de temas de Shopify recarga secciones sin recargar la página:
 *  hay que rehacer los cálculos de scroll y, si la sección era el hero,
 *  volver a montar la escena. */
export function conectarEditorDeTemas() {
  if (!window.Shopify?.designMode) return;
  document.addEventListener('shopify:section:load', (e) => {
    if (e.target.querySelector('#scene')) {
      escena?.dispose();
      conectarHero().then((s) => { escena = s; });
    }
    ScrollTrigger.refresh();
  });
  document.addEventListener('shopify:section:unload', () => ScrollTrigger.refresh());
}

/* ---------------------------------------------------------------------------
   DropScents — comportamiento de la tienda.

   Lo que no cabía en ui.js sin convertirlo en un cajón de sastre: el chat de
   Chatty, la galería de la tarjeta, el menú lateral, el carrusel, el hero del
   índice, la ficha de producto y el carrito.

   Misma regla que ui.js: nada de aquí conoce el catálogo. Todo se lee del DOM
   (atributos data-*), así que da igual si el HTML lo escribió Liquid con
   productos reales o la maqueta local.
--------------------------------------------------------------------------- */

import { gsap } from 'gsap';
import { conectarFacetas } from './facetas.js';

export const REDUCIDO = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ===========================================================================
   1. el chat — Chatty (Avada)
   ---------------------------------------------------------------------------
   Chatty no publica una API estable. Lo que SÍ es estable es su botón
   flotante, que lleva `data-chatty-widget="trigger"`: hacer clic en él es
   exactamente lo que hace un cliente, así que es lo que menos se rompe cuando
   la app se actualiza.

   `ChattyJS.openWidget()` existe pero por sí solo no abre el panel (probado en
   la tienda), así que queda de segundo intento, no de primero.

   El script de la app se carga después que el tema, así que si todavía no
   está se espera un poco en vez de dar el botón por muerto.
   =========================================================================== */

const SELECTOR_CHATTY = '[data-chatty-widget="trigger"], #Avada-FAQ_WidgetTrigger';
const ABIERTO_CHATTY = '.Avada-Faqs_Button.opened, .Avada-Faqs_Button--opened';

function intentarChatty() {
  // ya está abierto: volver a pulsar lo cerraría, que es lo contrario
  if ($(ABIERTO_CHATTY)) return true;

  const boton = $(SELECTOR_CHATTY);
  if (boton) { boton.click(); return true; }

  if (typeof window.ChattyJS?.openWidget === 'function') {
    window.ChattyJS.openWidget();
    return true;
  }
  if (typeof window.avadaFaqTrigger === 'function') {
    window.avadaFaqTrigger();
    return true;
  }
  return false;
}

/** Otros plugins habituales, por si algún día se cambia de app. */
function intentarOtros() {
  if (typeof window.DropScentsChat === 'function') { window.DropScentsChat(); return true; }
  if (window.$crisp) { window.$crisp.push(['do', 'chat:open']); return true; }
  if (window.Tawk_API?.maximize) { window.Tawk_API.maximize(); return true; }
  if (window.tidioChatApi?.open) { window.tidioChatApi.open(); return true; }
  if (window.Intercom) { window.Intercom('show'); return true; }
  if (window.zE) { window.zE('messenger', 'open'); return true; }
  if (window.Shopify?.chat?.open) { window.Shopify.chat.open(); return true; }
  return false;
}

export function abrirChat() {
  // el override manual manda sobre todo lo demás
  if (typeof window.DropScentsChat === 'function') { window.DropScentsChat(); return; }
  if (intentarChatty() || intentarOtros()) return;

  /* La app tarda en cargar. Se reintenta durante unos segundos antes de
     rendirse: es mejor un botón que responde tarde que uno que miente. */
  let intentos = 0;
  const reloj = setInterval(() => {
    intentos += 1;
    if (intentarChatty() || intentarOtros() || intentos > 24) {
      clearInterval(reloj);
      if (intentos > 24) aviso();
    }
  }, 250);
}

let avisoTO = 0;
function aviso() {
  const textos = window.DropScentsTextos || {};
  let t = $('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    const ig = document.documentElement.dataset.instagram;
    t.textContent = textos.chatFallo || 'El chat no está respondiendo ahora mismo.';
    if (ig) {
      const a = document.createElement('a');
      a.href = ig;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = textos.chatInstagram || 'Escríbenos por Instagram';
      t.append(' ', a);
    }
    document.body.appendChild(t);
  }
  requestAnimationFrame(() => t.classList.add('is-on'));
  clearTimeout(avisoTO);
  avisoTO = setTimeout(() => t.classList.remove('is-on'), 6000);
}

export function conectarChat() {
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-chat]');
    if (!b) return;
    e.preventDefault();
    /* El chat se abre por encima de todo: si el menu lateral sigue puesto,
       el panel de Chatty queda debajo y parece que el boton no hizo nada. */
    $('#menu-lateral:not([hidden]) [data-drawer-cerrar]')?.click();
    abrirChat();
  });
}

/* ===========================================================================
   2. galería de la tarjeta
   ---------------------------------------------------------------------------
   Las imágenes ya están todas en el HTML: aquí sólo se enciende una y se
   apagan las demás. Cambiar el `src` daría un parpadeo en la primera pasada.
   =========================================================================== */

export function conectarGalerias(raiz = document) {
  $$('[data-galeria]', raiz).forEach((caja) => {
    const fotos = $$('.card__slide', caja);
    if (fotos.length < 2) return;
    let i = 0;

    const pintar = (n) => {
      i = (n + fotos.length) % fotos.length;
      fotos.forEach((f, k) => f.classList.toggle('is-on', k === i));
    };

    $$('[data-galeria-paso]', caja).forEach((boton) => {
      boton.addEventListener('click', (e) => {
        // el enlace que cubre la tarjeta entera está debajo: sin esto,
        // pulsar la flecha navegaría al producto
        e.preventDefault();
        e.stopPropagation();
        pintar(i + Number(boton.dataset.galeriaPaso));
      });
    });
  });
}

/* ===========================================================================
   3. menú lateral
   =========================================================================== */

export function conectarDrawer() {
  const drawer = $('#menu-lateral');
  if (!drawer) return;
  const panel = $('.drawer__panel', drawer);
  const abridor = $('[data-drawer-abrir]');
  let ultimoFoco = null;

  const enfocables = () =>
    $$('a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])', panel)
      .filter((el) => el.offsetParent !== null);

  function abrir() {
    ultimoFoco = document.activeElement;
    drawer.hidden = false;
    // un frame para que la transición arranque desde el estado cerrado
    requestAnimationFrame(() => drawer.classList.add('is-on'));
    abridor?.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    window.DropScentsLenis?.stop();
    enfocables()[0]?.focus();
  }

  function cerrar() {
    drawer.classList.remove('is-on');
    abridor?.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    window.DropScentsLenis?.start();
    const fin = () => { drawer.hidden = true; };
    if (REDUCIDO) fin();
    else setTimeout(fin, 420);
    ultimoFoco?.focus();
  }

  abridor?.addEventListener('click', abrir);
  $$('[data-drawer-cerrar]', drawer).forEach((b) => b.addEventListener('click', cerrar));
  // navegar cierra: si no, el panel sigue abierto sobre la página nueva
  $$('a', panel).forEach((a) => a.addEventListener('click', cerrar));

  document.addEventListener('keydown', (e) => {
    if (drawer.hidden) return;
    if (e.key === 'Escape') { cerrar(); return; }
    if (e.key !== 'Tab') return;
    // el panel es modal: el tabulador no puede salirse a la página de detrás
    const lista = enfocables();
    if (!lista.length) return;
    const primero = lista[0];
    const ultimo = lista[lista.length - 1];
    if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
  });
}

/* ===========================================================================
   4. carrusel
   =========================================================================== */

export function conectarCarruseles(raiz = document) {
  $$('[data-carrusel]', raiz).forEach((carrusel) => {
    const pista = $('[data-carrusel-pista]', carrusel);
    if (!pista) return;
    const flechas = $$('[data-carrusel-paso]', carrusel);
    const progreso = $('[data-carrusel-progreso]', carrusel);

    const salto = () => {
      const slide = pista.firstElementChild;
      if (!slide) return pista.clientWidth;
      const gap = parseFloat(getComputedStyle(pista).columnGap) || 0;
      return slide.getBoundingClientRect().width + gap;
    };

    flechas.forEach((boton) => {
      boton.addEventListener('click', () => {
        pista.scrollBy({
          left: salto() * Number(boton.dataset.carruselPaso),
          behavior: REDUCIDO ? 'auto' : 'smooth',
        });
      });
    });

    function estado() {
      const max = pista.scrollWidth - pista.clientWidth;
      const x = pista.scrollLeft;
      flechas.forEach((b) => {
        const dir = Number(b.dataset.carruselPaso);
        // 2px de holgura: el scroll no siempre cae en un entero exacto
        b.disabled = dir < 0 ? x <= 2 : x >= max - 2;
      });
      if (progreso && max > 0) {
        const visible = pista.clientWidth / pista.scrollWidth;
        progreso.style.width = `${Math.max(visible * 100, 8)}%`;
        progreso.style.transform = `translateX(${(x / max) * (100 / Math.max(visible, 0.08) - 100)}%)`;
      }
    }

    pista.addEventListener('scroll', estado, { passive: true });
    window.addEventListener('resize', estado);
    estado();
  });
}

/* ===========================================================================
   5. hero «el índice»
   ---------------------------------------------------------------------------
   El visor sigue al ratón. Sólo se monta si hay ratón fino: en táctil no hay
   hover que lo dispare y el CSS ya lo esconde.
   =========================================================================== */

export function conectarIndice(raiz = document) {
  if (REDUCIDO) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  $$('[data-indice]', raiz).forEach((seccion) => {
    const vista = $('[data-indice-vista]', seccion);
    const filas = $$('[data-indice-fila]', seccion);
    if (!vista || !filas.length) return;
    const fotos = $$('.indice__vista-img', vista);
    const marco = vista.parentElement;

    const x = gsap.quickTo(vista, 'x', { duration: 0.5, ease: 'power3.out' });
    const y = gsap.quickTo(vista, 'y', { duration: 0.5, ease: 'power3.out' });

    const mover = (e) => {
      const caja = marco.getBoundingClientRect();
      // el visor se centra en el cursor, pero sin salirse del contenedor
      const px = e.clientX - caja.left - vista.offsetWidth / 2;
      const py = e.clientY - caja.top - vista.offsetHeight / 2;
      x(Math.min(Math.max(px, 0), caja.width - vista.offsetWidth));
      y(Math.min(Math.max(py, 0), caja.height - vista.offsetHeight));
    };

    filas.forEach((fila) => {
      fila.addEventListener('pointerenter', (e) => {
        const i = Number(fila.dataset.i);
        fotos.forEach((f, k) => f.classList.toggle('is-on', k === i));
        vista.classList.add('is-on');
        mover(e);
      });
      fila.addEventListener('pointermove', mover);
    });

    seccion.addEventListener('pointerleave', () => vista.classList.remove('is-on'));
  });
}

/* ===========================================================================
   6. ficha de producto
   =========================================================================== */

export function conectarProducto(raiz = document) {
  const pdp = $('[data-pdp]', raiz);
  if (!pdp) return;

  const fotos = $$('.pdp__img', pdp);
  const minis = $$('[data-pdp-mini]', pdp);
  const precio = $('[data-pdp-precio]', pdp);
  const antes = $('[data-pdp-antes]', pdp);
  const formato = window.DropScentsTextos?.formatoDinero || '';

  function verFoto(i) {
    if (i < 0 || i >= fotos.length) return;
    fotos.forEach((f, k) => f.classList.toggle('is-on', k === i));
    minis.forEach((m, k) => m.classList.toggle('is-on', k === i));
  }

  minis.forEach((m) => m.addEventListener('click', () => verFoto(Number(m.dataset.pdpMini))));

  /* El precio grande y la foto siguen a la presentación marcada. Sin esto la
     página seguiría funcionando (el radio ya lleva su precio al lado), pero
     el número de arriba se quedaría mintiendo. */
  $$('.pres input', pdp).forEach((radio) => {
    radio.addEventListener('change', () => {
      if (precio && radio.dataset.precio) {
        precio.textContent = dinero(Number(radio.dataset.precio), formato);
      }
      if (antes) {
        const comparar = Number(radio.dataset.antes || 0);
        const actual = Number(radio.dataset.precio || 0);
        if (comparar > actual) {
          antes.textContent = dinero(comparar, formato);
          antes.hidden = false;
        } else {
          antes.hidden = true;
        }
      }
      const img = Number(radio.dataset.imagen);
      if (!Number.isNaN(img) && img >= 0) verFoto(img);
    });
  });
}

/** Réplica mínima de `money_format` para poder cambiar el precio sin recargar. */
function dinero(centimos, formato) {
  const v = Number(centimos) / 100;
  const dos = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const cero = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  if (!formato) return `$${dos.format(v)}`;
  return formato.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, token) =>
    token.includes('no_decimals') ? cero.format(Math.round(v)) : dos.format(v));
}

/* ===========================================================================
   7. cantidad (ficha y carrito)
   ---------------------------------------------------------------------------
   OJO en el carrito: las cantidades van en `updates[]` POSICIONALES. Aquí sólo
   se cambia el VALOR del input, nunca se añade ni se quita ninguno, porque el
   orden de los inputs es el orden de las líneas.
   =========================================================================== */

export function conectarCantidades(raiz = document) {
  $$('.cantidad', raiz).forEach((caja) => {
    const input = $('.cantidad__i', caja);
    if (!input) return;
    $$('[data-cantidad]', caja).forEach((boton) => {
      boton.addEventListener('click', () => {
        const min = Number(input.min || 0);
        const n = Math.max(min, (Number(input.value) || 0) + Number(boton.dataset.cantidad));
        input.value = String(n);
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
  });
}

/* ===========================================================================
   8. selects que envían su formulario
   ---------------------------------------------------------------------------
   Idioma y orden de colección. Sin JS el <noscript> deja un botón que hace lo
   mismo, así que esto es comodidad, no un requisito.
   =========================================================================== */

export function conectarSelects(raiz = document) {
  $$('[data-envia-al-cambiar]', raiz).forEach((select) => {
    /* El orden de una coleccion filtrada NO: ese lo intercepta facetas.js para
       cambiar solo la rejilla. `form.submit()` no dispara el evento submit, asi
       que si se enviara aqui la pagina se recargaria entera. */
    if (select.closest('[data-facetas-orden]')) return;
    select.addEventListener('change', () => select.form?.submit());
  });
}

/* ===========================================================================
   arranque
   =========================================================================== */

export function conectarTienda(raiz = document) {
  conectarFacetas(raiz);
  conectarGalerias(raiz);
  conectarCarruseles(raiz);
  conectarIndice(raiz);
  conectarProducto(raiz);
  conectarCantidades(raiz);
  conectarSelects(raiz);
}

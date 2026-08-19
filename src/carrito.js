/* ===========================================================================
   El carrito lateral

   Regla de este archivo: **el JavaScript no calcula precios**. Cada cambio se
   manda a Shopify y después se pide a Liquid que vuelva a pintar la sección
   entera con la Section Rendering API. Un carrito que suma en el cliente
   acaba enseñando un total distinto al del checkout, y ese es el bug que más
   caro sale de todos.

   Sin JavaScript el carrito sigue funcionando: el panel está en el DOM, las
   cantidades son un <form> a /cart con `updates[]` posicionales y el icono
   del header es un enlace de verdad a /cart.
   =========================================================================== */

import { volarAlCarrito } from './animacion.js';

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => Array.from(raiz.querySelectorAll(sel));

const SECCION = 'carrito-drawer';

/* ---------------------------------------------------------------------------
   pintar
   --------------------------------------------------------------------------- */

/** Pide a Liquid la sección recién calculada y sustituye el panel entero.
 *  Se conserva el estado de apertura: el cajón no debe cerrarse por dentro
 *  cada vez que alguien pulsa «+». */
async function repintar() {
  const drawer = $('[data-carrito-drawer]');
  if (!drawer) return;

  const abierto = drawer.classList.contains('is-on');
  const res = await fetch(`${window.Shopify?.routes?.root || '/'}?section_id=${SECCION}`);
  if (!res.ok) return;

  const html = await res.text();
  const nuevo = new DOMParser().parseFromString(html, 'text/html')
    .querySelector('[data-carrito-drawer]');
  if (!nuevo) return;

  /* Si estaba abierto se marca ANTES de insertar, para que no haya un
     fotograma con el panel fuera de la pantalla. */
  if (abierto) { nuevo.classList.add('is-on'); nuevo.hidden = false; }
  drawer.replaceWith(nuevo);

  sincronizarContador();
}

/** Enseña lo que Shopify contestó cuando dijo que no.
 *
 *  Pulsar «+» y que no pase nada es la peor respuesta posible: el cliente no
 *  sabe si falló la red, si el botón está roto o si no quedan unidades. Y el
 *  motivo real —«ya tienes todas las que quedan»— es escasez de la buena:
 *  cierta, comprobable y dicha por Shopify, no inventada por el tema. */
function avisar(texto) {
  const panel = $('[data-carrito-drawer] .drawer__panel');
  if (!panel || !texto) return;
  $('[data-cart-aviso]')?.remove();
  const p = document.createElement('p');
  p.className = 'dcart__aviso';
  p.setAttribute('data-cart-aviso', '');
  p.setAttribute('role', 'status');
  p.textContent = texto;
  panel.querySelector('.dcart__top')?.after(p);
}

/** Saca el motivo del cuerpo de una respuesta de error de Shopify. */
async function motivo(res) {
  try {
    const d = await res.json();
    return d.description || d.message || null;
  } catch {
    return null;
  }
}

/** El número del icono del header vive fuera del cajón. */
function sincronizarContador() {
  const dentro = $('[data-carrito-drawer] [data-cart-count]');
  const n = dentro ? dentro.textContent.trim() : null;
  if (n === null) return;
  $$('[data-cart-count]').forEach((el) => {
    if (el.closest('[data-carrito-drawer]')) return;
    el.textContent = n;
    el.hidden = n === '0';
  });
}

/* ---------------------------------------------------------------------------
   abrir y cerrar
   --------------------------------------------------------------------------- */

let devolverFoco = null;

export function abrirCarrito() {
  const drawer = $('[data-carrito-drawer]');
  if (!drawer) return false;
  devolverFoco = document.activeElement;
  drawer.hidden = false;
  /* un fotograma antes de la clase: si no, la transición no arranca */
  requestAnimationFrame(() => drawer.classList.add('is-on'));
  document.documentElement.style.overflow = 'hidden';
  window.DropScentsLenis?.stop();
  $('.drawer__cerrar', drawer)?.focus();
  return true;
}

function cerrarCarrito() {
  const drawer = $('[data-carrito-drawer]');
  if (!drawer) return;
  drawer.classList.remove('is-on');
  document.documentElement.style.overflow = '';
  window.DropScentsLenis?.start();
  setTimeout(() => { drawer.hidden = true; }, 320);
  devolverFoco?.focus?.();
  devolverFoco = null;
}

/* ---------------------------------------------------------------------------
   conectar
   --------------------------------------------------------------------------- */

export function conectarCarrito() {
  if (!$('[data-carrito-drawer]')) return;

  /* --- abrir desde el icono del header ---------------------------------- */
  document.addEventListener('click', (e) => {
    const abrir = e.target.closest('[data-abrir-carrito]');
    if (abrir) {
      /* con Cmd/Ctrl o rueda, que se comporte como el enlace que es */
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      abrirCarrito();
      return;
    }

    if (e.target.closest('[data-drawer-cerrar]') &&
        e.target.closest('[data-carrito-drawer]')) {
      e.preventDefault();
      cerrarCarrito();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const drawer = $('[data-carrito-drawer].is-on');
    if (drawer) cerrarCarrito();
  });

  /* --- añadir al carrito ------------------------------------------------ */
  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('form[action*="/cart/add"]');
    if (!form) return;
    e.preventDefault();

    const boton = form.querySelector('[type="submit"]');
    boton?.classList.add('is-cargando');

    /* El frasco sale volando ANTES de que conteste Shopify: la respuesta al
       clic tiene que ser inmediata, y si al final la petición falla se abre
       el cajón con el motivo escrito, que es una respuesta más clara que un
       vuelo que no ocurrió. */
    volarAlCarrito(fotoDelFormulario(form));

    try {
      const res = await fetch(`${window.Shopify?.routes?.root || '/'}cart/add.js`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!res.ok) {
        /* Lo más común aquí es que no queden unidades. Se abre el cajón con
           el motivo puesto en vez de recargar la página a una pantalla de
           error de Shopify. */
        const texto = await motivo(res);
        await repintar();
        abrirCarrito();
        if (texto) avisar(texto);
        else form.submit();
        return;
      }

      await repintar();
      abrirCarrito();
    } catch {
      form.submit();
    } finally {
      boton?.classList.remove('is-cargando');
    }
  });

  /* --- cantidades y quitar, dentro del cajón ---------------------------- */
  document.addEventListener('click', async (e) => {
    const drawer = e.target.closest('[data-carrito-drawer]');
    if (!drawer) return;

    const quitar = e.target.closest('[data-quitar]');
    if (quitar) {
      e.preventDefault();
      const linea = quitar.closest('.dlinea')?.querySelector('[data-linea]')?.dataset.linea;
      if (linea) await cambiar(Number(linea), 0);
      return;
    }

    const paso = e.target.closest('[data-cantidad]');
    if (!paso) return;
    e.preventDefault();
    const campo = paso.parentElement.querySelector('.cantidad__i');
    if (!campo) return;
    const nueva = Math.max(0, Number(campo.value || 0) + Number(paso.dataset.cantidad));
    await cambiar(Number(campo.dataset.linea), nueva);
  });

  /* Escribir la cantidad a mano también cuenta. */
  document.addEventListener('change', async (e) => {
    const campo = e.target.closest('[data-carrito-drawer] .cantidad__i');
    if (!campo) return;
    await cambiar(Number(campo.dataset.linea), Math.max(0, Number(campo.value || 0)));
  });

  sincronizarContador();
}

/** De dónde sale el frasco que vuela: la foto que el cliente está mirando.
 *  En la ficha es la imagen activa del visor; en una sugerencia del carrito o
 *  en una tarjeta, la suya. Si no se encuentra ninguna no pasa nada — el vuelo
 *  se salta y el resto del flujo sigue igual. */
function fotoDelFormulario(form) {
  const ficha = form.closest('.pdp');
  if (ficha) return $('.pdp__img.is-on', ficha) || $('.pdp__img', ficha);
  const caja = form.closest('.bundle, .tarjeta, article, li');
  return caja ? $('img', caja) : null;
}

/** `/cart/change.js` con `line` (1-based) es la única forma segura de tocar
 *  una línea: por `id` se confunden dos líneas de la misma variante con
 *  propiedades distintas. */
async function cambiar(linea, cantidad) {
  if (!linea) return;
  const drawer = $('[data-carrito-drawer]');
  drawer?.classList.add('is-ocupado');
  try {
    const res = await fetch(`${window.Shopify?.routes?.root || '/'}cart/change.js`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ line: linea, quantity: cantidad }),
    });
    const texto = res.ok ? null : await motivo(res);
    /* Se repinta pase lo que pase: si Shopify no aceptó el cambio, el número
       del input tiene que volver al valor verdadero. */
    await repintar();
    if (texto) avisar(texto);
  } finally {
    $('[data-carrito-drawer]')?.classList.remove('is-ocupado');
  }
}

/* ---------------------------------------------------------------------------
   la barra de compra fija de la ficha

   Aparece cuando el botón real sale de la pantalla y se esconde cuando vuelve.
   Con IntersectionObserver, que no cuesta un listener de scroll por fotograma.
   --------------------------------------------------------------------------- */
export function conectarAtcFija() {
  const barra = $('[data-atc-fija]');
  const real = $('.pdp__atc');
  if (!barra || !real) return;

  const io = new IntersectionObserver(([e]) => {
    barra.classList.toggle('is-on', !e.isIntersecting);
  }, { rootMargin: '0px 0px -8px 0px' });
  io.observe(real);
}

/* ---------------------------------------------------------------------------
   DropScents — filtros de colección y de búsqueda.

   Todo esto funciona SIN JavaScript: el panel es un <form method="get"> y los
   chips son enlaces. Lo que se añade aquí es que, en vez de recargar la página
   entera, se pide sólo el trozo que cambia (Section Rendering API) y se
   sustituye. La URL se actualiza igual, así que compartir el enlace, recargar
   o darle a «atrás» siguen funcionando.

   Regla de la que depende todo: la URL es el estado. No hay una copia del
   filtro en una variable de JavaScript que se pueda desincronizar.
--------------------------------------------------------------------------- */

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const REDUCIDO = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===========================================================================
   el panel
   =========================================================================== */

function conectarPanel(raiz) {
  const panel = $('[data-facetas-panel]', raiz);
  const abridor = $('[data-facetas-abrir]', raiz);
  if (!panel || !abridor) return;
  let ultimoFoco = null;

  const abrir = () => {
    ultimoFoco = document.activeElement;
    panel.classList.add('is-on');
    abridor.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    window.DropScentsLenis?.stop();
    $('.faceta > summary', panel)?.focus();
  };

  const cerrar = () => {
    panel.classList.remove('is-on');
    abridor.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    window.DropScentsLenis?.start();
    ultimoFoco?.focus();
  };

  abridor.addEventListener('click', () => {
    panel.classList.contains('is-on') ? cerrar() : abrir();
  });
  $$('[data-facetas-cerrar]', panel).forEach((b) => b.addEventListener('click', cerrar));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-on')) cerrar();
  });

  return cerrar;
}

/* ===========================================================================
   el filtro de precio
   ---------------------------------------------------------------------------
   Dos deslizadores que no pueden cruzarse, dos campos numéricos que dicen lo
   mismo, y una barra que pinta el tramo elegido.
   =========================================================================== */

function conectarPrecios(raiz, alCambiar) {
  $$('[data-precio]', raiz).forEach((caja) => {
    const min = $('[data-precio-rango="min"]', caja);
    const max = $('[data-precio-rango="max"]', caja);
    const cmin = $('[data-precio-campo="min"]', caja);
    const cmax = $('[data-precio-campo="max"]', caja);
    const tope = Number(caja.dataset.tope) || 0;
    if (!min || !max) return;

    const pintar = () => {
      caja.style.setProperty('--desde', min.value);
      caja.style.setProperty('--hasta', max.value);
    };

    /* Los dos deslizadores comparten la pista: si el de mínimo pasara al de
       máximo, el tramo se daría la vuelta y el filtro pediría un rango
       imposible. Se empujan en vez de cruzarse. */
    const desdeRango = (quien) => {
      let a = Number(min.value);
      let b = Number(max.value);
      if (a > b) {
        if (quien === 'min') b = a; else a = b;
        min.value = String(a);
        max.value = String(b);
      }
      /* Un extremo en su tope significa «sin límite por ese lado»: se manda
         vacío para que la URL no se llene de parámetros que no filtran. */
      if (cmin) cmin.value = a === 0 ? '' : String(a);
      if (cmax) cmax.value = b === tope ? '' : String(b);
      pintar();
    };

    min.addEventListener('input', () => desdeRango('min'));
    max.addEventListener('input', () => desdeRango('max'));
    min.addEventListener('change', alCambiar);
    max.addEventListener('change', alCambiar);

    const desdeCampo = () => {
      const a = cmin.value === '' ? 0 : Math.max(0, Math.min(tope, Number(cmin.value)));
      const b = cmax.value === '' ? tope : Math.max(0, Math.min(tope, Number(cmax.value)));
      min.value = String(Math.min(a, b));
      max.value = String(Math.max(a, b));
      pintar();
    };
    [cmin, cmax].forEach((c) => {
      if (!c) return;
      c.addEventListener('input', desdeCampo);
      c.addEventListener('change', alCambiar);
    });

    pintar();
  });
}

/* ===========================================================================
   pedir sólo el trozo que cambia
   =========================================================================== */

let peticion = 0;

async function pedir(url, seccion, raiz) {
  const nuestra = ++peticion;
  const cont = $('[data-facetas-resultados]', raiz);
  if (!cont) { window.location.href = url; return; }

  cont.classList.add('facetas-cargando');

  try {
    /* `section_id` devuelve SÓLO el HTML de esta sección. Se separa el hash
       porque Shopify no lo espera y el navegador tampoco lo manda. */
    const [ruta, hash] = url.split('#');
    const sep = ruta.includes('?') ? '&' : '?';
    const res = await fetch(`${ruta}${sep}section_id=${encodeURIComponent(seccion)}`);
    if (!res.ok) throw new Error(res.status);
    const html = await res.text();

    // otra petición salió después: la nuestra ya no interesa
    if (nuestra !== peticion) return;

    const nuevo = new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector('[data-facetas-resultados]');
    if (!nuevo) throw new Error('la respuesta no trae resultados');

    cont.innerHTML = nuevo.innerHTML;
    history.pushState({ facetas: true }, '', url);
    conectar(raiz);

    /* Volver arriba de la rejilla, no de la página: la barra de filtros tiene
       que seguir a la vista para poder seguir tocando. */
    const ancla = $('[data-facetas-rejilla]', raiz) || cont;
    const y = window.scrollY + ancla.getBoundingClientRect().top - 140;
    if (y < window.scrollY) {
      window.DropScentsLenis
        ? window.DropScentsLenis.scrollTo(y, { duration: REDUCIDO ? 0 : 0.8 })
        : window.scrollTo({ top: y, behavior: REDUCIDO ? 'auto' : 'smooth' });
    }
    if (hash) location.hash = hash;
  } catch (e) {
    // si algo falla, la navegación normal sigue existiendo
    window.location.href = url;
  } finally {
    if (nuestra === peticion) cont.classList.remove('facetas-cargando');
  }
}

/** Construye la URL a partir del formulario, sin los campos vacíos. */
function urlDelForm(form) {
  const datos = new FormData(form);
  const params = new URLSearchParams();
  for (const [k, v] of datos.entries()) {
    if (String(v).trim() !== '') params.append(k, v);
  }
  const base = form.getAttribute('action') || window.location.pathname;
  const cola = params.toString();
  return cola ? `${base}?${cola}` : base;
}

/* ===========================================================================
   conectar (se vuelve a llamar después de cada cambio)
   =========================================================================== */

function conectar(raiz) {
  const facetas = $('[data-facetas]', raiz);
  const seccion = raiz.dataset.seccionId || facetas?.dataset.seccion;
  if (!seccion) return;

  const cerrarPanel = conectarPanel(raiz);
  const form = $('[data-facetas-form]', raiz);

  const aplicar = () => { if (form) pedir(urlDelForm(form), seccion, raiz); };

  if (form) {
    // marcar una casilla aplica el filtro; el botón sigue ahí para quien no lo espere
    form.addEventListener('change', (e) => {
      if (e.target.matches('input[type="checkbox"], input[type="number"]')) aplicar();
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      aplicar();
      // en móvil el panel tapa la rejilla: aplicar y quedarse mirando la hoja
      // no deja ver el resultado
      if (window.innerWidth < 900) cerrarPanel?.();
    });
    conectarPrecios(form, aplicar);
  }

  // el orden es otro formulario, con su propio action
  const orden = $('[data-facetas-orden]', raiz);
  if (orden) {
    orden.addEventListener('change', (e) => {
      e.preventDefault();
      pedir(urlDelForm(orden), seccion, raiz);
    });
    orden.addEventListener('submit', (e) => {
      e.preventDefault();
      pedir(urlDelForm(orden), seccion, raiz);
    });
  }

  // chips, «quitar los filtros» y paginación
  raiz.addEventListener('click', manejarEnlace);
}

function manejarEnlace(e) {
  const a = e.target.closest('[data-facetas-enlace]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
  const raiz = a.closest('[data-seccion-id]');
  if (!raiz) return;
  e.preventDefault();
  pedir(a.href, raiz.dataset.seccionId, raiz);
}

/* ===========================================================================
   arranque
   =========================================================================== */

export function conectarFacetas(raiz = document) {
  $$('[data-seccion-id]', raiz).forEach((seccion) => {
    if (!$('[data-facetas-resultados]', seccion)) return;
    conectar(seccion);
  });

  /* El botón «atrás» tiene que deshacer el filtro, no salirse de la página.
     Se recarga en vez de reconstruir: es una vez cada mil, y así no hay dos
     caminos distintos que puedan discrepar. */
  if (!window.__facetasPop) {
    window.__facetasPop = true;
    window.addEventListener('popstate', (e) => {
      if (e.state?.facetas || $('[data-facetas-resultados]')) window.location.reload();
    });
  }
}

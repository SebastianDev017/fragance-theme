/* ---------------------------------------------------------------------------
   Punto de entrada de la MAQUETA LOCAL (index.html).

   Existe para poder iterar la escena 3D y el diseño sin levantar Shopify.
   Escribe en el DOM el mismo marcado que después genera Liquid —mismas clases,
   mismos atributos data-*— y de ahí en adelante manda src/ui.js, que es el
   único comportamiento y no sabe de dónde salieron los datos.

   La fuente de verdad del catálogo, en producción, son los productos de
   Shopify. src/data.js es sólo el relleno de esta maqueta.
--------------------------------------------------------------------------- */

import './fonts.css';
import './styles.css';
import './tienda.css';
import { FRAGANCIAS, ENVIO_AFUERA, dol, desde, foto } from './data.js';
import { iniciar, $, $$ } from './ui.js';

const c = (usd) => Math.round(usd * 100);   // Liquid entrega céntimos

/* ---------- comparador: las 6 primeras ---------- */
const compare = $('#compare');
compare.dataset.envioAfuera = c(ENVIO_AFUERA);
compare.dataset.moneyFormat = '${{amount_no_decimals}}';

const picker = $('.picker');
picker.innerHTML = FRAGANCIAS.slice(0, 6).map((f, i) => `
  <button class="chip" type="button" aria-pressed="${i === 0}"
    data-id="${f.id}"
    data-nombre="${f.marca} ${f.nombre} · ${f.tipo}"
    data-d5="${c(f.usd.d5)}" data-d10="${c(f.usd.d10)}" data-full="${c(f.usd.full)}"
    data-url="#estanteria">${f.nombre}</button>`).join('');

/* ---------- estantería ---------- */
$('#shelf').innerHTML = FRAGANCIAS.map((f) => `
  <article class="card" data-reveal-card>
    <figure class="card__shot">
      <img src="${foto(f)}" alt="Frasco y caja de ${f.marca} ${f.nombre}" loading="lazy" decoding="async" width="500" height="400">
    </figure>
    <div class="card__body">
      <p class="card__brand">${f.marca}</p>
      <h3 class="card__name">${f.nombre}</h3>
      <p class="card__fam">${f.familia}</p>
      <p class="card__notes">${f.notas}</p>
      <div class="card__foot">
        <p class="card__price">Decant 5 ml<b>${dol(f.usd.d5)}</b></p>
        <p class="card__full">Frasco ${f.tipo.split('· ')[1]}<br><b>${dol(f.usd.full)}</b></p>
      </div>
    </div>
  </article>`).join('');

/* CTA del hero: el decant más barato del catálogo, no un número inventado */
$('[data-hero-price]').textContent = dol(desde);

iniciar({ cargarEscena: () => import('./scene.js') });

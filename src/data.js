/* ---------------------------------------------------------------------------
   DropScents — catálogo y comparativa de precios.

   ⚠️  TODOS los precios se publican en DÓLARES. Quien quiera pagar en bolívares
   lo coordina por el chat de la tienda, a la tasa del día — por eso aquí no hay
   ninguna constante de tasa: un número viejo en la página es peor que ninguno.

   Los precios en USD son los del frasco en Amazon el día que actualices la
   lista: ese es justamente el argumento de la marca, así que no los infles.
--------------------------------------------------------------------------- */

export const ENVIO_AFUERA = 24;   // USD — courier + manejo si lo pide él mismo

/* Las fotos van en public/productos/<id>.webp (frasco + caja, fondo claro).
   Si el archivo no existe, la tarjeta muestra una silueta neutra en vez de
   romperse. Ver README → "Fotos de producto".                                */
export const FRAGANCIAS = [
  {
    id: 'sauvage-elixir',
    render: { w: 1.8, h: 1.9, sh: 0.5, capR: 0.43, juice: '#6E1A32', cap: '#241428', box: '#2B303A', banda: '#8A93A3' },
    marca: 'Dior',
    nombre: 'Sauvage Elixir',
    tipo: 'Elixir · 60 ml',
    familia: 'Denso, especiado, caro de oler. Con dos toques sobra.',
    notas: 'Canela · Lavanda · Regaliz',
    usd: { full: 165, d5: 19, d10: 34 },
  },
  {
    id: 'bleu',
    render: { w: 1.62, h: 2.05, sh: 0.34, capR: 0.4, juice: '#1E3F73', cap: '#12182A', box: '#101B33', banda: '#5B79B0' },
    marca: 'Chanel',
    nombre: 'Bleu de Chanel',
    tipo: 'EDP · 100 ml',
    familia: 'Serio sin ser viejo. El de la reunión y el de la cita.',
    notas: 'Cítricos · Incienso · Sándalo',
    usd: { full: 145, d5: 13, d10: 23 },
  },
  {
    id: 'lemale-elixir',
    render: { w: 1.55, h: 2.1, sh: 0.3, capR: 0.36, juice: '#C08A2E', cap: '#B08B3E', box: '#8C6A22', banda: '#E3C77E' },
    marca: 'Jean Paul Gaultier',
    nombre: 'Le Male Elixir',
    tipo: 'Parfum · 100 ml',
    familia: 'Miel, lavanda y vainilla. Dulce pero con carácter.',
    notas: 'Miel · Lavanda · Haba tonka',
    usd: { full: 128, d5: 14, d10: 25 },
  },
  {
    id: 'goodgirl',
    render: { w: 1.4, h: 2.25, sh: 0.6, capR: 0.3, juice: '#1B1B2A', cap: '#C2A048', box: '#14141F', banda: '#C2A048' },
    marca: 'Carolina Herrera',
    nombre: 'Good Girl',
    tipo: 'EDP · 80 ml',
    familia: 'Dulce y oscuro. Se queda pegado en la ropa dos días.',
    notas: 'Jazmín · Tonka · Cacao',
    usd: { full: 112, d5: 10, d10: 18 },
  },
  {
    id: 'lavieestbelle',
    render: { w: 1.85, h: 1.75, sh: 0.28, capR: 0.34, juice: '#EFC2D2', cap: '#D8B15E', box: '#F3E8DC', banda: '#D8B15E' },
    marca: 'Lancôme',
    nombre: 'La Vie Est Belle',
    tipo: 'EDP · 100 ml',
    familia: 'Dulce de verdad, no empalagoso. Rinde una barbaridad.',
    notas: 'Iris · Praliné · Pachulí',
    usd: { full: 128, d5: 12, d10: 21 },
  },
  {
    id: 'stronger',
    render: { w: 1.6, h: 2.0, sh: 0.26, capR: 0.34, juice: '#7A2B3A', cap: '#9E9EA6', box: '#6E2130', banda: '#C9A6AE' },
    marca: 'Giorgio Armani',
    nombre: 'Stronger With You',
    tipo: 'EDT · 100 ml',
    familia: 'Vainilla con castaña. El que preguntan en la fiesta.',
    notas: 'Cardamomo · Castaña · Vainilla',
    usd: { full: 96, d5: 9, d10: 16 },
  },
  {
    id: 'libre',
    render: { w: 1.72, h: 1.95, sh: 0.42, capR: 0.38, juice: '#E3C069', cap: '#C7A44E', box: '#EDE6DA', banda: '#C7A44E' },
    marca: 'Yves Saint Laurent',
    nombre: 'Libre',
    tipo: 'EDP · 90 ml',
    familia: 'Lavanda y vainilla. Suave de lejos, fuerte de cerca.',
    notas: 'Lavanda · Azahar · Vainilla',
    usd: { full: 135, d5: 12, d10: 22 },
  },
  {
    id: 'eros',
    render: { w: 1.55, h: 2.15, sh: 0.32, capR: 0.35, juice: '#6FA9C7', cap: '#C8A64E', box: '#2F6E8F', banda: '#C8A64E' },
    marca: 'Versace',
    nombre: 'Eros',
    tipo: 'EDT · 100 ml',
    familia: 'Menta y vainilla, sin pena. Para salir de noche.',
    notas: 'Menta · Manzana verde · Vainilla',
    usd: { full: 78, d5: 8, d10: 14 },
  },
];

/* ---------- formato ---------- */

const usdFmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
export const dol = (usd) => `$${usdFmt.format(Math.round(usd))}`;

/** el decant más barato del catálogo, para el CTA del hero */
export const desde = Math.min(...FRAGANCIAS.map((f) => f.usd.d5));

/** ruta de la foto de producto de una fragancia */
export const foto = (f) => `/productos/${f.id}.webp`;

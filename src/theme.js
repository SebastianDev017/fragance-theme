/* ---------------------------------------------------------------------------
   Punto de entrada del TEMA de Shopify.

   Vite lo compila (vite.theme.config.js) a:
       theme/assets/dropscents.js    interfaz
       theme/assets/dropscents.css   estilos

   La maqueta local (index.html + src/main.js) sigue viva para iterar sin
   levantar Shopify; ambas comparten src/ui.js, así que no hay dos versiones
   del comportamiento.
--------------------------------------------------------------------------- */

import './styles.css';
import './tienda.css';
import './coleccion.css';
import './mundo.css';        /* la capa del mundo: va LA ÚLTIMA */
import { iniciar, conectarEditorDeTemas } from './ui.js';
import { conectarCarrito, conectarAtcFija } from './carrito.js';

iniciar();
conectarCarrito();
conectarAtcFija();
conectarEditorDeTemas();

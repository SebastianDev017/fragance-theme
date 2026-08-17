/* ---------------------------------------------------------------------------
   Punto de entrada del TEMA de Shopify.

   Vite lo compila (vite.theme.config.js) a:
       theme/assets/dropscents.js         interfaz + estilos
       theme/assets/dropscents-scene.js   la escena 3D, aparte y bajo demanda
       theme/assets/dropscents.css

   La maqueta local (index.html + src/main.js) sigue viva para iterar el 3D sin
   levantar Shopify; ambas comparten src/ui.js y src/scene.js, así que no hay
   dos versiones del comportamiento.
--------------------------------------------------------------------------- */

import './styles.css';
import { iniciar, conectarEditorDeTemas } from './ui.js';

/* La URL del bundle de la escena la pone theme.liquid con `asset_url`: en el
   CDN de Shopify una ruta relativa entre assets no resuelve de forma fiable.
   Al pasarla como URL en tiempo de ejecución, Three.js NO entra en este
   bundle: las páginas de producto y de colección no lo descargan. */
const url = window.DropScentsAssets?.scene;

iniciar({ cargarEscena: url ? () => import(/* @vite-ignore */ url) : null });
conectarEditorDeTemas();

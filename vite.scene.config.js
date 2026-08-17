/* ---------------------------------------------------------------------------
   Build del bundle de la ESCENA 3D para el tema.

       assets/dropscents-scene.js

   Va en su propia pasada de Vite, y no como una segunda entrada de la misma,
   a propósito: con dos entradas en un solo build Rollup extrae lo común a
   chunks compartidos que los assets se importan entre sí por ruta relativa —
   y eso en el CDN de Shopify no resuelve de forma fiable. Una pasada, un
   archivo autocontenido, cero rutas relativas.
--------------------------------------------------------------------------- */

import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    target: 'es2020',
    lib: {
      entry: 'src/scene-entry.js',
      formats: ['es'],
      fileName: () => 'dropscents-scene.js',
    },
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
});

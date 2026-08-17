/* ---------------------------------------------------------------------------
   Build del TEMA de Shopify.

       npm run build:theme   →   assets/dropscents.js
                                 assets/dropscents-scene.js
                                 assets/dropscents.css

   Shopify no empaqueta: el tema consume un bundle ya construido. Tres reglas
   que no son negociables aquí:

     · nombres FIJOS, sin hash — el Liquid los llama por `asset_url` y del
       cacheado ya se encarga el CDN de Shopify;
     · assets PLANOS — en un tema, `assets/` no admite subcarpetas, así que
       `publicDir` va desactivado (si no, Vite copiaría public/fonts y
       public/productos dentro y Shopify rechazaría el push);
     · la escena se compila APARTE (vite.scene.config.js) y el tema le pasa su
       URL — un chunk importado por ruta relativa no resuelve de forma fiable
       en el CDN, y así Three.js no viaja en las páginas que no lo usan.
--------------------------------------------------------------------------- */

import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'assets',
    emptyOutDir: false,          // en assets/ también viven las fuentes
    cssCodeSplit: false,
    target: 'es2020',
    lib: {
      entry: 'src/theme.js',
      formats: ['es'],
      fileName: () => 'dropscents.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: (info) => (info.name?.endsWith('.css') ? 'dropscents.css' : '[name][extname]'),
      },
    },
  },
});

import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import postcss from '@farmfe/js-plugin-postcss';
import VueRouter from 'unplugin-vue-router/vite'
export default defineConfig({
  vitePlugins: [ vue(), VueRouter({}) ],
  plugins: [
    postcss(),
    // "@farmfe/plugin-sass",
  ],
  compilation: {
    resolve: {
      alias: {
        // '@': './src',
      }
    },
    sourcemap: false
  },

});

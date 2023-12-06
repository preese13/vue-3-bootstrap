import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      vue: '@vue/compat',
      '@': resolve(__dirname, './src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  plugins: [vue({
    template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('_')
        }
      }
  })
],
build: {
    lib: {
      entry: './src/main.ce.js',
      name: 'firestop-pillow-estimator',
      fileName: 'firestop-pillow-estimator'
    }
  }
});

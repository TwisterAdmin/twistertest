import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // index.html is in the root
  build: {
    outDir: 'dist', // production build folder
    emptyOutDir: true, // clean dist before build
  },
});

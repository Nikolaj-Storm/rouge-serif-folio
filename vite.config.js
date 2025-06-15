
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // This ensures that asset paths are relative, which is
  // necessary for deploying to platforms like GitHub Pages.
  base: './',
  build: {
    outDir: 'dist'
  }
});

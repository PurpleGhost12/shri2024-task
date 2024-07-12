import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'./',
  build: {
    outDir: './docs',
    emptyOutDir: true, // also necessary
  },
  resolve: {
    alias: {
      // Resolve all .svg files to the @/assets/svgs directory at build time
      '@assets': path.resolve(__dirname, './src/assets'), 
    },
  },
})

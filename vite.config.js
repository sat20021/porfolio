import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 1230,
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173,
    allowedHosts: [
      'porfolio-fv8a.onrender.com',
      '.onrender.com'
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
  define: {
    global: 'globalThis',
  },
});
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/karan-goel-portfolio/',
  define: {
    // This is just a generic value for the Gemini API key.
    // This is not used at all, and can be ignored.
    'process.env.API_KEY': JSON.stringify('api-key-this-is-not-used-can-be-ignored!'),
  },
  server: {
    proxy: {
      // Target your Node.js backend.
      '/api-proxy': 'http://localhost:5000',
      '/ws-proxy': { target: 'ws://localhost:5000', ws: true },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});

import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: '/', // Root path for GitHub Pages (username.github.io)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
});

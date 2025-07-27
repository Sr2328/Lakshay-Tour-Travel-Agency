import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Lakshay-Tour-Travel-Agency/', // 👈 GitHub Pages base path
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // 👈 Ensure fallback support for GitHub Pages refresh
      },
    },
  },
});

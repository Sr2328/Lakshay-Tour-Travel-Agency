import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/Lakshay-Tour-Travel-Agency/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

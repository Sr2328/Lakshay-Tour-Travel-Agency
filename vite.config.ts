import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const isGitHubPages = env.VITE_GITHUB_PAGES === 'true';

  return {
    base: isGitHubPages ? '/Lakshay-Tour-Travel-Agency/' : '/',
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});

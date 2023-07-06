import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~/lib', replacement: '/src/lib' },
      { find: '~/hooks', replacement: '/src/hooks' },
      { find: '~/pages', replacement: '/src/pages' },
      { find: '~/', replacement: '/src' },
    ],
  },
});

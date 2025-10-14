import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react-timedown': resolve(__dirname, '../src/index.ts'),
    },
  },
});


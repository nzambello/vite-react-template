import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      include: ['src/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      coverage: {
        reporter: ['text', 'json-summary', 'json']
      },
      environment: 'jsdom',
      setupFiles: './src/vitest.setup.ts',
      // you might want to disable it, if you don't have tests that rely on CSS
      // since parsing CSS is slow
      css: true
    }
  })
);

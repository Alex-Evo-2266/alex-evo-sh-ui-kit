/// <reference types="vitest/config" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    globals: true,
    // включает describe/it/expect без импорта
    environment: "jsdom",
    // нужен для тестирования DOM/React
    setupFiles: "./src/tests/setup.ts" // опционально
    ,

    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  },
  base: "/alex-evo-sh-ui-kit/",
  plugins: [react(), libInjectCss(), dts({
    insertTypesEntry: true,
    exclude: ["./src/stories"]
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: "alex-evo-sh-ui-kit",
      formats: ["es", "umd"],
      fileName: format => `alex-evo-sh-ui-kit.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM"
        }
      }
    }
  }
});
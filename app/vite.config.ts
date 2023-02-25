/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { parse } from 'dotenv';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';

// const envFilePath = resolve(__dirname, '.env');
// const envConfig = parse(readFileSync(envFilePath));
// const envLocalFilePath = resolve(__dirname, '.env.local');
// const envLocalConfig = parse(readFileSync(envLocalFilePath));

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  // root: 'public',
  plugins: [
    react({
       // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
      babel: {
        "plugins": [
          ["babel-plugin-styled-components", {
            "ssr": false,
            "pure": true,
            "displayName": true,
            "fileName": false
          }]
        ]
      },
    }),
    tsconfigPaths(),
    checker({ typescript: true }),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'My app',
        },
      },
    }),
  ],
  publicDir: './public',
  /*define: {
    'process.env': { ...envConfig, ...envLocalConfig },
  },*/
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'src': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      // always throw with build warnings
      onwarn(warning, warn) {
        // @ts-ignore
        warn('\nBuild warning happened, customize "onwarn" callback in vite.config.ts to handle this error.');
        // @ts-ignore
        throw new Error(warning);
      },
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});

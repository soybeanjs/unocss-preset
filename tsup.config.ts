import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: ['@unocss/core'],
  shims: true,
  cjsInterop: true,
  sourcemap: false,
  target: 'es6',
  minify: true
});

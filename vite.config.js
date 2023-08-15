import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'WUI Design',
      fileName: 'wui-design',
    },
    css: {
      modules: true, // Enable CSS Modules if needed
    },
  }
})

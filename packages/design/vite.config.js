import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.js'),
      name: 'WUI Design',
      fileName: 'wui-design',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React'
        }
      }
    },
    css: {
      modules: true, // Enable CSS Modules if needed
    }
  },
  plugins:[react()]
})

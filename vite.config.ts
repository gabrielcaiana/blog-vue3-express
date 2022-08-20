import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('node:path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
  server: {
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => {
          const p : string = path.replace(/^\/api/, '')
          return p
        }
      },
    }
  }
})

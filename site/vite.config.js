import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bricks-design-system/',
  server: {
    fs: {
      // allow importing REGISTRY.md and tokens/ from the repo root (one level up)
      allow: [resolve(root, '..')],
    },
  },
})

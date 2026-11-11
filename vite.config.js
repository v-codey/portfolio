import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      // Import from the src root, e.g. `import { profile } from '@/data'`.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

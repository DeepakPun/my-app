import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    // include: ['src/sum.test.js'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
})

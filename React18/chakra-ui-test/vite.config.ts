import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root:"src/pages",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        layout: resolve(__dirname, "src", "pages", "Layout", "index.html"),
        forms: resolve(__dirname, "src", "pages", "forms", "index.html"),
      },
    },
  },
});

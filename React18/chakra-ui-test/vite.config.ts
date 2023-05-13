import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/pages",
  plugins: [react()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "pages", "index.html"),
        layout: resolve(__dirname, "src", "pages", "Layout", "index.html"),
        forms: resolve(__dirname, "src", "pages", "Forms", "index.html"),
        themes: resolve(__dirname, "src", "pages", "Themes", "index.html"),
      },
    },
  },
});

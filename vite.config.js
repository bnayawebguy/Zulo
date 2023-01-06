// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        blog: resolve(__dirname, "blog.html"),
        contact: resolve(__dirname, "contact.html"),
        projects: resolve(__dirname, "projects.html"),
      },
    },
  },
})

import { defineConfig } from "vite";

// Multi-page: site principal (index.html) + landing page (joelho.html).
// Sem plugins, para manter o build do site idêntico ao já validado.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        joelho: "joelho.html",
      },
    },
  },
});

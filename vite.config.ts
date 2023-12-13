import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pop: resolve(__dirname, "pop.html"),
		"color-picker": resolve(__dirname, "color-picker.html"),
		"preset-picker": resolve(__dirname, "preset-picker.html"),
      },
    },
  },
});

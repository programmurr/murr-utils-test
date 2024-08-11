// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Murr Utils Test",
      fileName: "murr-utils-test",
    },
  },
  plugins: [dts({ rollupTypes: true })],
});

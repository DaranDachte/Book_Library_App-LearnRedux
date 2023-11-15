import { defineConfig } from "vite";
import { node } from "@liuli-util/vite-plugin-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [node()],
});

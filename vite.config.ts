import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/chess-game/",
  server: {
    open: "/chess-game/",
    port: 3000,
  },
});

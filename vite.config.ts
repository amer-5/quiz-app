import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://0c6e-77-239-14-36.ngrok-free.app", // URL vašeg servera
        changeOrigin: true, // Promeni origin u zahtevu
        rewrite: (path) => path.replace(/^\/api/, ""), // Ukloni /api iz putanje
      },
    },
  },
});

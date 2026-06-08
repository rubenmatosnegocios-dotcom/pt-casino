import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        // Proxy all /api requests to the back‑end (Render will expose /api on the same domain)
        "/api": {
          target: "http://localhost:4000",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });


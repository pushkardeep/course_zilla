import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto", // This ensures that the service worker registration happens automatically
      workbox: false, // Disable Workbox since you're using a custom service worker
      strategies: "generateSW", // Ensure VitePWA does not generate another service worker
      devOptions: {
        enabled: true, // Enable for development, but ensure to use your own sw.js in production
      },
    }),
  ],
});

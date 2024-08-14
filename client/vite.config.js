import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      injectRegister: "auto",
      workbox: {
        swDest: 'sw.js', // Use your custom service worker file name
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/your-api\.com\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24, // 1 day
              },
            },
          },
        ],
      },
      // Optional: Disable Workbox if you are using your own implementation
      workbox: {
        importScripts: ['sw.js'],
        swDest: `sw-${Date.now()}.js`,
        skipWaiting: true,
        clientsClaim: true
      },
    }),
  ],
});

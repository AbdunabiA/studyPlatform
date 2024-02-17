import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
const manifestForPlugIn = {
  registerType: "autoUpdate",
  // includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "BrainBox",
    short_name: "BrainBox",
    description: "This is a study platform",
    icons: [
      {
        src: "/144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    theme_color: "#105491",
    background_color: "#105491",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};
export default defineConfig({
  plugins: [react(), jsconfigPaths(), VitePWA(manifestForPlugIn)],
});

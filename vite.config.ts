import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({ preset: "vercel" }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
    process.env.CLOUDFLARE_DEPLOYMENT
      ? cloudflare({
          configPath: "wrangler.jsonc",
          main: "src/server.ts",
        })
      : undefined,
  ].filter(Boolean),
  server: {
    port: 3000,
    middlewareMode: false,
  },
  build: {
    target: "ES2022",
  },
});

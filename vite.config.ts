import react from "@vitejs/plugin-react"
import { resolve } from "path"
import AutoImport from "unplugin-auto-import/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    AutoImport({
      imports: [
        "react",
        "react-router-dom",
        {
          "@tanstack/react-query": ["useQuery", "useMutation", "useQueryClient"],
        },
        {
          "@mantine/modals": ["openConfirmModal"],
        },
        {
          "@mantine/form": ["useForm"],
        },
        {
          sonner: ["toast"],
        },
      ],
      dts: "./src/auto-imports.d.ts",
      dirs: ["src/hooks", "src/store"],
      eslintrc: {
        enabled: true,
        filepath: "./src/.eslintrc-auto-import.json",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`,
      },
    },
  },
})

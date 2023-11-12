import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from "vite3-plugin-express";
import checker from "vite-plugin-checker";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    express("src/server"),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}',
      },
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@widgets": resolve(__dirname, "src/widgets"),
      "@features": resolve(__dirname, "src/features"),
      "@entities": resolve(__dirname, "src/entities"),
      "@shared": resolve(__dirname, "src/shared"),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import react from '@vitejs/plugin-react'
// import commonjs from "@originjs/vite-plugin-commonjs";
// import commonjs from "@rollup/plugin-commonjs";
// import resolve from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   minify: true,
  //   sourcemap: true,
  //   rollupOptions: {
  //     external: ["react", "react-dom"],
  //     output: {
  //       globals: {
  //         react: "React",
  //         "react-dom": "ReactDOM",
  //       },
  //     },
  //   },
  // },
  // optimizeDeps: {
  //   include: ["react", "react-dom/client"],
  // },
  // plugins: [
  //   resolve({
  //     preferBuiltins: true,
  //     browser: true,
  //   }),
  //   commonjs({
  //     include: /node_modules/,
  //     requireReturnsDefault: "auto", // <---- this solves default issue
  //   }),
    react(),
  ],
});

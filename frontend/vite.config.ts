import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

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
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  plugins: [react()],
});

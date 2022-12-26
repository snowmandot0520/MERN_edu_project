import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   minify: true,
  //   sourcemap: true,
  //   rollupOptions: {
  //     external: [],
  //     output: {
  //       globals: { },
  //     },
  //   },
  // },
  optimizeDeps: {
    include: ['react', 'react-dom/client']
  },
  plugins: [react()],
})

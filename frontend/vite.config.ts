import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        globals: { },
      },
    },
  },
  plugins: [react()],
})

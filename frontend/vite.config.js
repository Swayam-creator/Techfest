import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/", // Change base to "/"
  server: {
    host: 'localhost',
    port: 5173,
  },
});

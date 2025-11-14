import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    server: {
    host: true,           // makes it accessible over LAN
    port: 5173,           // optional, default port is 5173
    open: false,          // don't auto-open in browser (optional)
  },
})

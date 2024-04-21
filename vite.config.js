import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tiles': {
        target: 'https://stamen-tiles.a.ssl.fastly.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tiles/, ''),
      },
    },
  },
})

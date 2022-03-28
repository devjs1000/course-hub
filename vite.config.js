import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ()=>{
  
  return defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://xciteserver.herokuapp.com/xcite",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],

})
}
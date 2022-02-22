import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({mode})=>{
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://management-xcitedu.herokuapp.com",
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
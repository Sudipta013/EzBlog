import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //adding proxy due to localhost:5173 in frontend and localhost:3000 in backend...
    proxy: {
      '/api':{
        //anytime the url has '/api' change the target head as localhost:3000...
        target: 'http://localhost:3000',
        //secure as false as it is http not https...
        secure: false,
      },
    },
  },
  plugins: [react()],
})

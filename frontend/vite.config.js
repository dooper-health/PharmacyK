// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, '/api')
//       }
//     }
//   }
// })




import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // 👈 serve on 127.0.0.1 instead of localhost
    port: 5173,         // optional, default is 5173
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // 👈 updated to 127.0.0.1
        changeOrigin: true,
        secure: false
      }
    }
  }
});

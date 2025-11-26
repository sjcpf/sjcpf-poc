import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
// import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueDevTools(),
    quasar({
      autoImportComponentCase: 'kebab',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // To enable self-secured https over local network for remote GPS debugging on mobile
  // !!! DISABLE THIS BEFORE PUSHING TO MAIN !!!
  /* server: {
    host: true,
    port: 5173,
    https: {
      key: fs.readFileSync('C:/platform-tools/localhost+1-key.pem'),
      cert: fs.readFileSync('C:/platform-tools/localhost+1.pem')
    }
  }*/
  // base: '/',
})

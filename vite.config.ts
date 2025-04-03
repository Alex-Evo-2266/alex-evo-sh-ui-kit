import { defineConfig } from 'vite'
import dts from "vite-plugin-dts"
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import {libInjectCss} from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/alex-evo-sh-ui-kit/",  
  plugins: [
    react(),
    libInjectCss(), 
    dts({
      insertTypesEntry: true,
      exclude: ["./src/stories"]
    })
  ],
  build:{
    lib:{
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: "alex-evo-sh-ui-kit",
      formats: ["es", "umd"],
      fileName: (format)=> `alex-evo-sh-ui-kit.${format}.js`,
    },
    rollupOptions:{
      external: ["react", "react-dom", "react-router-dom"],
      output:{
        globals:{
          react: "React",
          "react-dom": "ReactDOM",
          
        }
      }
    }
  }
})

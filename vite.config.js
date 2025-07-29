import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/DonorList/',
  plugins: [
    vue(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

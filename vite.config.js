// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })





import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
// import { resolve } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
});

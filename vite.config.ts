import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: true,
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      plugins: [react(), tailwindcss()],
      build: {
        outDir: 'dist',
        sourcemap: false,
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom'],
              'vendor-motion': ['framer-motion'],
              'vendor-charts': ['recharts'],
              'vendor-icons': ['lucide-react'],
            }
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      }
    };
});
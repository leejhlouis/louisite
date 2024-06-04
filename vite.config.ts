import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  const isProduction = env.NODE_ENV === 'production'

  return {
    plugins: [react(), nodePolyfills()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      proxy: {
        '/blog/rss': {
          target: 'https://medium.com/@leejhlouis/feed',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/blog\/rss/, '')
        },
        '/spotify': {
          target: isProduction
            ? 'https://louisite.netlify.app/.netlify/functions/spotify'
            : 'http://localhost:9999/.netlify/functions/spotify',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/spotify/, '')
        }
      }
    },
    assetsInclude: ['**/*.md']
  }
})

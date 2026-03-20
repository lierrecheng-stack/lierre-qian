export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/', 

    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      hmr: {
        clientPort: 5173
      }
    }
  }
});

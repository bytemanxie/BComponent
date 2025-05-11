import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ByteshipComponents',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'react-transition-group'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-transition-group': 'ReactTransitionGroup',
        },
        // Generate CSS file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name || 'assets/[name]-[hash][extname]';
        },
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills
    target: 'esnext',
    // Leave minification up to applications
    minify: false,
  },
});

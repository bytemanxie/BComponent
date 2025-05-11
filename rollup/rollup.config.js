import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import sass from 'rollup-plugin-sass'

// Detect environment
const isProd = process.env.NODE_ENV === 'production';
console.log(`Building in ${isProd ? 'production' : 'development'} mode`);

// TypeScript configuration based on environment
const overrides = {
  compilerOptions: { 
    declaration: true,
    sourceMap: !isProd
  },
  exclude: ["src/**/*.test.tsx", "src/**/*.stories.tsx", "src/**/*.stories.mdx", "src/setupTests.ts"]
}

const config = {
  input: 'src/index.ts',
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({ 
      tsconfigOverride: overrides,
      clean: isProd, // Clean output directory in production
      check: isProd  // Type checking in production only
    }),
    sass({ 
      output: 'dist/byte-components.css',
      outputStyle: isProd ? 'compressed' : 'expanded'
    })
  ],
}

export default config


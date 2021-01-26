import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import typescript from '@wessberg/rollup-plugin-ts'
import image from 'rollup-plugin-img'

const config = {
  input: 'src/lib.ts',
  external: [
    'react',
    'styled-components',
    '@google/model-viewer/dist/model-viewer',
    'qrcode.react',
  ],
  output: {
    file: 'dist/lib.min.js',
    format: 'esm',
    name: '@r2u/react-ar-components',
    globals: {
      react: 'React',
    },
  },
  plugins: [
    image({
      limit: 1024 * 1024, // higher limit to 1Mb
    }),
    commonjs(),
    typescript({
      transpiler: 'babel',
    }),
    terser({
      format: {
        comments: RegExp('webpackMode: "eager"'),
      },
    }),
  ],
}

export default config

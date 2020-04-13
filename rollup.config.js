
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from './rollup-plugin/rollup-plugin-copy';
import bs from './rollup-plugin/rollup-plugin-browsersync';

import scss from 'rollup-plugin-scss';


const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
    sourcemap : true
  },
  plugins: [
    resolve(),  // resolver for node_modules
    commonjs(), // converts CJS to ESM,
    copy({ 
      src: './src/index.html', 
      target: './public/index.html' 
    }),
    scss({
      // Filename to write all styles to
      output: 'public/styles.css',
    }),
    bs({
      watch: true,
      server: 'public'
    })
  ]
}


import fs from 'fs';
import path from 'path';

export default function(options) {
  return {
    name: 'rollup-plugin-copy',

    // Build Phase
    buildStart() {
      console.log('rollup-plugin-copy: buildStart')
      this.addWatchFile('./src/index.html')
    },

    // Runs per module
        resolveId() {
          console.log('rollup-plugin-copy: resolveId')
        },
        load() {
          console.log('rollup-plugin-copy: load')
        },
        transform() {
          console.log('rollup-plugin-copy: transform')
        },

    buildEnd() {
      console.log('rollup-plugin-copy: buildEnd')
    },

    // Generate Phase
    renderStart() {
      console.log('rollup-plugin-copy: renderStart')
    },
    banner() {
      console.log('rollup-plugin-copy: banner')
    },
    intro() {
      console.log('rollup-plugin-copy: intro')
    },
    outro() {
      console.log('rollup-plugin-copy: outro')
    },
    intro() {
      console.log('rollup-plugin-copy: intro')
    },

      // Runs per chunk
        renderChuck() {
          console.log('rollup-plugin-copy: renderChuck')
        },

    // If success
    generateBundle() {
      console.log('rollup-plugin-copy: generateBundle')
      const { src, target } = options;
      if (!src || !target) {
        throw ('rollup-plugin-copy: src and target path is required');
        
        return;
      }
      const srcPath = path.resolve(src);
      const targetPath = path.resolve(target);
      fs.copyFileSync(srcPath, targetPath);
      
    },
    // If Error
    renderError() {
      console.log('rollup-plugin-copy: renderError')
    }
    
  }
}
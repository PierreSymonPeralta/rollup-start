
const bs = require("browser-sync").create('rollup');

export default function(options) {
  return {
    name: 'rollup-plugin-browsersync',

    // Build Phase
    buildStart() {
      console.log('rollup-plugin-browsersync:  buildStart')
    },

    // Runs per module
        resolveId() {
          console.log('rollup-plugin-browsersync: resolveId')
        },
        load() {
          console.log('rollup-plugin-browsersync: load')
        },
        transform() {
          console.log('rollup-plugin-browsersync: transform')
        },

    buildEnd() {
      console.log('rollup-plugin-browsersync: buildEnd')
    },

    // Generate Phase
    renderStart() {
      console.log('rollup-plugin-browsersync: renderStart')
    },
    banner() {
      console.log('rollup-plugin-browsersync: banner')
    },
    intro() {
      console.log('rollup-plugin-browsersync: intro')
    },
    outro() {
      console.log('rollup-plugin-browsersync: outro')
    },
    intro() {
      console.log('rollup-plugin-browsersync: intro')
    },

      // Runs per chunk
        renderChuck() {
          console.log('rollup-plugin-browsersync: renderChuck')
        },

    // If success
    generateBundle() {
      console.log('rollup-plugin-browsersync: generateBundle')
      if (!bs.active) {
        bs.init(options);
      }
    },
    // If Error
    renderError() {
      console.log('rollup-plugin-browsersync: renderError')
    }
    
  }
}
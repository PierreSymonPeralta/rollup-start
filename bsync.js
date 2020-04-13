const bs = require("browser-sync").create('rollup');

bs.init({
  watch: true,
  server: 'public'
});



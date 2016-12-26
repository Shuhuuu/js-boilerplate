const rollup = require("rollup");
const includePaths = require('rollup-plugin-includepaths');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const buble = require("rollup-plugin-buble");
const jsx = require('rollup-plugin-jsx');
const typescript = require('rollup-plugin-typescript');
const uglify = require('rollup-plugin-uglify');

rollup.rollup({
  entry: "src/frontend.ts",
  plugins: [ 
    includePaths({
      paths: ['src']
    }),
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    jsx( {factory: 'm'} ),
    typescript({typescript: require('typescript')}),
    buble(),
    uglify()
  ],
  sourceMap: true
}).then(function (bundle) {
  bundle.write({
    dest: "public/bundle.min.js",
    format: "cjs"
  });
});

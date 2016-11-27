var rollup = require("rollup");
var includePaths = require('rollup-plugin-includepaths');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var buble = require("rollup-plugin-buble");
var jsx = require('rollup-plugin-jsx');
var typescript = require('rollup-plugin-typescript');

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
    buble()
  ],
  sourceMap: true
}).then(function (bundle) {
  bundle.write({
    dest: "public/bundle.js",
    format: "cjs"
  });
});

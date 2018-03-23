const webpack = require('webpack')
const path = require('path')
const libraryName = 'dill'
var outputFile = libraryName + '.js'
var plugins = []
const env = process.env.NODE_ENV
console.log('=================>',JSON.stringify(process.env, null, 2))
if (env === 'production') {
  outputFile = libraryName + '.min.js'
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  plugins: plugins,
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config

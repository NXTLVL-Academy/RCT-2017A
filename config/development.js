const { entry, output } = require('./io')
const rules = require('./rules')
const plugins = require('./plugins')
const resolution = require('./resolve')
const {resolve} = require('path')
const postcssImport = require('postcss-import')

const config = {
  entry,
  output,
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: output.path,
    // match the output path
    port: 5000,
    host: '0.0.0.0',
    publicPath: output.publicPath,
    proxy: {
      '/api' : 'http://backend:3000',
      '/auth': 'http://backend:3000',
      '/system': 'http://backend:3000'
    },
  },
  module: { rules: rules.development },
  plugins: plugins.development,
  resolve: resolution,
  devtool: 'cheap-module-source-map'
}

module.exports = config

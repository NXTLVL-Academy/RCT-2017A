const HTMLPlugin = require('html-webpack-plugin')
const ExtractText = require("extract-text-webpack-plugin")
const webpack = require('webpack')

const htmlGenerator = new HTMLPlugin({
  template: './src/index.html'
})

const css = new ExtractText({filename: 'style/[name]-[id]-[chunkhash].css', allChunks: true})

module.exports = {
  development: [
    htmlGenerator,
    css,
    new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor', filename: 'vendor.min-[hash:6].js'}),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin()
  ],
  production: [
    htmlGenerator,
    css,
    new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor', filename: 'vendor.min-[hash:6].js'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
    })
  ]
}

const { resolve } = require('path')
const { dependencies } = require('../package.json')

const entry =  {
  app: [
      'react-hot-loader/patch',
      // activate HMR for React
      'webpack-dev-server/client?http://localhost:5000',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'babel-polyfill',
      './src/index.js'
  ],
  vendor: Object.keys(dependencies)
}
const output = {
  chunkFilename: '[name]-[chunkhash]-[hash].js',
  hotUpdateChunkFilename: 'app-[hash].hot.js',
  filename: '[name]-[hash].js',
  path: resolve(process.cwd(), 'build'),
  publicPath: '/'
}

const prod_entry = {
  app: [
    'babel-polyfill',
    './src/index.js'
  ],
  vendor: Object.keys(dependencies)
}

module.exports = {
  entry,
  output,
  prod_entry
}

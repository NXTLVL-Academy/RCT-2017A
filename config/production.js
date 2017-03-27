const { prod_entry, output } = require('./io')
const rules = require('./rules')
const plugins = require('./plugins')
const resolution = require('./resolve')
const {resolve} = require('path')
const postcssImport = require('postcss-import')

const config = {
  entry: prod_entry,
  output,
  module: { rules: rules.production },
  plugins: plugins.production,
  resolve: resolution,
}

module.exports = config

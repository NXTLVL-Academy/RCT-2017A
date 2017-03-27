const extractor = require("extract-text-webpack-plugin")

const js = {
  dev: {
    test: /\.js$/,
    loader: {
      loader: 'babel-loader',
      options: {
        presets: [["es2015", {"modules": false}], 'stage-2', 'react'],
        plugins: ['react-hot-loader/babel', 'transform-flow-strip-types', 'transform-decorators-legacy']
      }
    }
  },
  prod: {
    test: /\.js$/,
    loader: {
      loader: 'babel-loader',
      options: {
        presets: [["es2015", {"modules": false}], 'stage-2', 'react'],
        plugins: ['transform-flow-strip-types', 'transform-decorators-legacy']
      }
    }
  }
}

const css = {
  dev: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  },
  prod: {
    test: /\.css$/,
    use: [extractor.extract({
      fallbackLoader: 'style-loader!css-loader',
      loader: ['css-loader', 'postcss-loader', 'sass-loader']
    })]
  }
}

const scss = {
  dev: {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  },
  prod: {
    test: /\.scss$/,
    loader: extractor.extract({
      fallbackLoader: 'style-loader',
      loader: ['css-loader', 'postcss-loader', 'sass-loader']
    })
  }
}


const static = {
  test: /\.(png|jpg|gif|woff|svg|eot|ttf|mp4|webm)$/,
  loader: 'url-loader',
  options: {
    name: 'static/[name]-[hash].[ext]',
    publicPath: '/',
    limit: 500
  }
}

module.exports = {
  development: [ js.dev, css.dev, scss.dev, static ],
  production: [ js.prod, css.prod, scss.prod, static ]
}

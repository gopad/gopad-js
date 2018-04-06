const Webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const pkg = require('./package.json')

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  },

  output: {
    path: require('path').resolve(__dirname, 'lib'),
    filename: pkg.name + '.js',
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  resolve: {
    extensions: [
      '.js',
      '.json'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  }
}

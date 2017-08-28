const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000 } // Convert images < 10k to base64 strings
      }]
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }, {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = config

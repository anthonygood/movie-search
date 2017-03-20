require('dotenv').config()

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

// Pass API_KEY for TheMovieDatabase
var configPlugin = new webpack.DefinePlugin({
  'process.env': {
    'API_KEY': JSON.stringify(process.env.API_KEY)
  }
})

var htmlPlugin = new HtmlWebpackPlugin({
  title: 'Search The Movie Database',
  template: './index.html'
})

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'index.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [configPlugin, htmlPlugin]
};

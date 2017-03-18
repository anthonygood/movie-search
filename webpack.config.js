require('dotenv').config()

var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

// Pass API_KEY for TheMovieDatabase
configPlugin = new webpack.DefinePlugin({
  'process.env': {
    'API_KEY': JSON.stringify(process.env.API_KEY)
  }
})

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'app', 'app.js'),
  output: {
    path: buildPath,
    filename: "bundle.js"
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
      }
    ]
  },

  plugins: [configPlugin]
};

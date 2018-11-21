const path = require('path');
const webpack = require('webpack');

const debug = process.env.NODE_ENV != 'production';
module.exports = {
  devtool : debug ? 'inline-sourcemap' : null,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build', // instead of publicPath: '/build/' 
    filename: '[name].js'
  },
  plugins : debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccuranceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle : false, sourcemap : false })
  ]
};
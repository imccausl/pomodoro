const webpack = require('webpack');

module.exports = {
  context: `${__dirname}/src/app`,
  entry: {
    app: './index.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
};

const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/basejump.jsx',
  output: {
    path: path.resolve(__dirname, 'app','assets','javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
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
       use: ['style-loader', 'css-loader'],
      },
      {
       test: /\.less$/,
       use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
       test: /\.json$/,
       loader: 'json-loader',
      }
    ]
  },
  devtool: 'source-maps',
};

var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
  context: __dirname,
  entry: './frontend/basejump.jsx',
  output: {
    path: path.resolve(__dirname, 'app','assets','javascripts'),
    filename: 'bundle.js'
  },
  plugins: plugins,
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
     },
     {
       test: /\.(jpg|png|svg)$/,
       loader: 'url-loader',
       options: {
        limit: 25000,
      }
     }
    ]
  },
  devtool: 'source-maps',
};

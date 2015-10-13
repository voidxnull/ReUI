const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './example/allComponents.jsx'
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: path.join(__dirname, 'example'),
    filename: 'exampleBundle.js',
    pathinfo: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          optional: ['runtime'],
          stage: 0
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {colors: true},
    quiet: false,
    noInfo: false,
    publicPath: '/',
    contentBase: './example/',
    port: 3000
  }
};

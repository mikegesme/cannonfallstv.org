const path = require('path')

module.exports = {
  context: __dirname,
  entry: './build/js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'docs/assets/js'),
    publicPath: '/docs/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/docs'),
    publicPath: '/docs/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

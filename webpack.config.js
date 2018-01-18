const path = require('path')

const config = {
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
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
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
        // include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = false
}

module.exports = config

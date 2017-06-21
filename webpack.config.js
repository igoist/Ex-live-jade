const path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css')

var nodeExternals = require('webpack-node-externals')

var isProduction = process.env.NODE_ENV === 'production'
var productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
] : []
var clientLoaders = isProduction ? productionPluginDefine.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : []

var commonLoaders = [
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
]

module.exports = [
  {
    entry: './src/server.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
    plugins: productionPluginDefine,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ].concat(commonLoaders)
    }
  },
  {
    entry: ['./src/app/browser.js'], // 'babel-polyfill',
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: clientLoaders.concat([
      new ExtractTextPlugin({
        filename: 'index.css',
        allChunks: true
      })
    ]),
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // {
        //   test: /\.css$/,
        //   use: extractCSS.extract(['css-loader'])
        // },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
]
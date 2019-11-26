const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './bundles'),
    chunkFilename: "[name].bundle.js",
    filename: "[name].bundle.js",
  },
  optimization: {
    sideEffects: true
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  module: {
  rules: [{
      test: /src\/.*\.js$/,
      exclude: /(node_modules|bower_components)/i,
      use: [{ loader: 'babel-loader' }]
  }, {
    test: /\.(sa|sc|c)ss$/,
    use: [ 'style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader' ],
  }, {
    test: /\.(png|jpg|gif|svg|woff|ttf|eot)/,
    loader: 'url-loader',
  }]
},
};

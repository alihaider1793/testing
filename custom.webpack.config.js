const webpack = require("webpack");
console.log("The custom config is used");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
           process: 'process/browser',
    }),
],
  resolve: {
    fallback: {
      assert: false,
      // "assert": require.resolve('assert'),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      url: false,
      util: false,
    },
  },
};

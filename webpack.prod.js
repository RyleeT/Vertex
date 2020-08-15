const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./Vertex/frontend/src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "Vertex/frontend/public/static"),
    publicPath: "/static/",
    filename: "[name].js",
    chunkFilename: "[id]-[chunkhash].js",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "nosources-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "Vertex/frontend/templates/index.html"),
      filename: "../index.html",
    }),
    new CleanWebpackPlugin(),
  ].filter(Boolean),
};

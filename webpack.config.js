const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    main: "./Vertex/frontend/src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "Vertex/frontend/static"),
    publicPath: "/static/",
    filename: "[name].js",
    chunkFilename: "[id]-[chunkhash].js",
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
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "Vertex/frontend"),
    proxy: [
      {
        context: "!/static/main.js", // send everything but static main.js
        target: "http://127.0.0.1:8000", // points to django dev server
        changeOrigin: true,
      },
    ],
    writeToDisk: true,
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ].filter(Boolean),
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const Visualizer = require("webpack-visualizer-plugin");
const WebpackMonitor = require("webpack-monitor");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    filename: "bundle.[hash:6].js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: "./build"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ }]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "React Typescript",
      template: "./index.html"
    }),
    // new BundleAnalyzerPlugin()
    // new Visualizer()
    new WebpackMonitor({
      launch: true, // -> default 'false'
      port: 3030, // default -> 8081
    })
  ]
};

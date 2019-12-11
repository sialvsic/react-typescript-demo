const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const Visualizer = require("webpack-visualizer-plugin");
const WebpackMonitor = require("webpack-monitor");

module.exports = {
  entry: {
    app: "./src/index.tsx"
  },
  mode: "production",
  output: {
    filename: "bundle.[chunkhash:6].js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: "./build"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ["ts-loader"] },
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          // sass-loader
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "React Typescript",
      template: "./index.html"
    }),
    new BundleAnalyzerPlugin()
    // new Visualizer()
    // new WebpackMonitor({
    //   launch: true // -> default 'false'
    // })
  ]
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // }
};

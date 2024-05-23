const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map", // Enable inline source maps
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // defines the files that shouldn’t be processed from the loader(s)
        use: {
          loader: "babel-loader", // tells which loader(s) should be used against the matched modules.
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // rule to .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/, // rule to image files
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // clean on every build
    new HtmlWebpackPlugin({
      title: "Webpack",
      filename: "index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    maxAssetSize: 500000, // to avoid warnings
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8564, // Set the dev server port
    open: true, // Automatically open the browser
  },
};


const path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/dashboard_main.js",
  output: {
    filename: "bundle.js",
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
        test: /\.(png|jpg)$/, // rule to image files
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
  performance: {
    maxAssetSize: 500000, // to avoid warnings
  },
};

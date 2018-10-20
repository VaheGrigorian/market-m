const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const rules = [
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader"
    }
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader", options: { importLoaders: 1 } },
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: loader => [require("precss")()]
        }
      }
    ]
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ["file-loader"]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ["file-loader"]
  },
  {
    test: /\.html$/,
    loader: ["html-loader"]
  }
];

const common = {
  mode: "development",
  target: "web",
  stats: "errors-only",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/"
  },
  module: {
    rules
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    common.plugins = [
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      }),
      ...common.plugins
    ];

    common.module.rules[1].use[0] = {
      loader: MiniCssExtractPlugin.loader
    };
  }
  return common;
};

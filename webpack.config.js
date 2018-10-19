const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = {
  target: "web",
  externals: ["react", "react-dom", "react-router"],
  stats: "errors-only",
  serve: {
    port: 3000,
    content: "./dist"
  },
  devServer: {},
  output: {
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
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
      }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    common.plugins = [
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      })
    ];

    common.module.rules[1].use[0] = {
      loader: MiniCssExtractPlugin.loader
    };
  }
  return common;
};

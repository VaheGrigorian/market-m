module.exports = {
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
              "@babel/plugin-proposal-object-rest-spread",
              "react-hot-loader/babel",
              ["react-css-modules", { webpackHotModuleReloading: true }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                require("postcss-import")({ root: loader.resourcePath }),
                require("postcss-url")(),
                require("postcss-preset-env")()
              ]
            }
          }
        ]
      }
    ]
  }
};

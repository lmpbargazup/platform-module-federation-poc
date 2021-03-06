const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = () => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./dist"),
      publicPath: "http://localhost:3004/",
    },
    devServer: {
      contentBase: path.resolve(__dirname, "./dist"),
      index: "index.html",
      port: 3004,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".jsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("@babel/preset-react")],
          },
        },
        {
          test: /.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
        title: "mfe-react",
      }),
      new ModuleFederationPlugin({
        name: "mfe_react",
        filename: "remoteEntry.js",
        exposes: {
          "./module": "./src/bootstrap.js",
        },

        shared: ["react", "react-dom"],
      }),
    ],
  };
};

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (options) => {
  return {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      publicPath: "http://localhost:3002/",
      uniqueName: "app-contact",
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/react", "@babel/env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app-contact",
        filename: "remoteEntry.js",
        exposes: {
          "./module": "./app.js",
        },

        shared: ["react", "react-dom"],
      }),
    ],
    devServer: {
      port: 3002,
    },
  };
};

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3005/",
    uniqueName: "mfeangular",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "mfeangular",
      filename: "remoteEntry.js",
      exposes: {
        "./module": "./src/bootstrap.ts", // bootstrap --> main --> AppModule --> WebComp
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};

const Path = require("path");

let buildFolder = Path.join(__dirname, "_build/default/client");

module.exports = (env) => ({
  devtool: env.production ? false : "inline-cheap-module-source-map",
  entry: {
    app: Path.join(buildFolder, "/app/client/app.js"),
  },
  mode: env.production ? "production" : "development",
  output: {
    path: Path.join(__dirname, "static"),
    filename: "[name].js",
  },
});

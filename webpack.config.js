const path = require("path");

module.exports = function (webpackConfig, env) {
  webpackConfig.babel.babelrc = false;
  webpackConfig.babel.plugins.push("transform-runtime");
  webpackConfig.babel.plugins.push([
    "import",
    {
      libraryName: "antd",
      style: "css",
    },
  ]);
  // HMR for development.
  if (env === "development") {
    webpackConfig.babel.plugins.push("dva-hmr");
  }
  webpackConfig.module.loaders.push({
    test: /\.scss$/,
    loaders: [
      "style?sourceMap",
      "css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]",
      "resolve-url",
      "sass?sourceMap",
    ],
  });
  webpackConfig["sassLoader"] = {
    includePaths: [path.resolve(__dirname, "src")],
  };

  return webpackConfig;
};

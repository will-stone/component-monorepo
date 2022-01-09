const pkg = require(process.cwd() + "/package.json");

module.exports = {
  mode: 'production',
  entry: process.cwd() + "/src/index.js",
  output: {
    filename: pkg.main,
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: { version: "3" },
                  modules: "commonjs",
                  useBuiltIns: "usage",
                  targets: {
                    browsers: [
                      "edge >= 16",
                      "safari >= 9",
                      "firefox >= 57",
                      "ie >= 11",
                      "ios >= 9",
                      "chrome >= 49",
                    ],
                  },
                },
              ],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
};

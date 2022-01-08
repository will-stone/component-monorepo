const pkg = require(process.cwd() + "/package.json");

module.exports = {
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
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
};

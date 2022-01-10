import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";

const pkg = require(process.env.PWD + "/package.json");

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", exports: "named" },
    { file: pkg.module, format: "esm", exports: "named" },
  ],
  plugins: [
    del({ targets: ["dist/*"] }),
    external(),
    babel({
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      presets: [
        "@babel/preset-typescript",
        [
          // Defaults to transform all code to ES5
          // https://babeljs.io/docs/en/babel-preset-env
          "@babel/preset-env",
        ],
        [
          "@babel/preset-react",
          {
            // Use latest React JSX transform
            // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
            runtime: "automatic",
          },
        ],
      ],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
  external: [
    /@babel\/runtime/,
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
};

import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";

const babelConfig = require("./babel.config.json");
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
      ...babelConfig,
    }),
  ],
  external: [
    /@babel\/runtime/,
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
};

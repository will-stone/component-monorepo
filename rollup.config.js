import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";

const pkg = require(process.env.INIT_CWD + "/package.json");

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
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [
        ["@babel/preset-env", {}],
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    }),
  ],
  external: Object.keys({
    ...(pkg.peerDependencies || {}),
    ...(pkg.dependencies || {}),
  }),
};

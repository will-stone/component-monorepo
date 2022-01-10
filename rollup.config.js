import babel from '@rollup/plugin-babel'
import del from 'rollup-plugin-delete'
import external from 'rollup-plugin-peer-deps-external'

const babelConfig = require('./babel.config.json')

const package_ = require(`${process.env.PWD}/package.json`)

export default {
  input: package_.source,
  output: [
    { file: package_.main, format: 'cjs', exports: 'named' },
    { file: package_.module, format: 'esm', exports: 'named' },
  ],
  plugins: [
    del({ targets: ['dist/*'] }),
    external(),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      ...babelConfig,
    }),
  ],
  external: [
    /@babel\/runtime/u,
    ...Object.keys(package_.peerDependencies || {}),
    ...Object.keys(package_.dependencies || {}),
  ],
}

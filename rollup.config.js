import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import del from 'rollup-plugin-delete'

const babelConfig = require('./babel.config.json')

const package_ = require(`${process.env.PWD}/package.json`)

export default {
  input: package_.source,
  output: [
    { file: package_.main, format: 'cjs', exports: 'named' },
    { file: package_.module, format: 'esm', exports: 'named' },
  ],
  plugins: [
    nodeResolve(),
    del({ targets: ['dist/*'] }),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      ...babelConfig,
    }),
  ],
  external: (id) => {
    const peerDependencies = Object.keys(package_.peerDependencies || {})
    const dependencies = Object.keys(package_.dependencies || {})
    return (
      peerDependencies.some((depName) => id.startsWith(depName)) ||
      dependencies.some((depName) => id.startsWith(depName))
    )
  },
}

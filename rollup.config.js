import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import del from 'rollup-plugin-delete'

const babelConfig = require('./babel.config.json')

const package_ = require(`${process.env.PWD}/package.json`)

// Extensions to resolve for
const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: package_.source,
  output: [
    { file: package_.main, format: 'cjs', exports: 'named' },
    { file: package_.module, format: 'esm', exports: 'named' },
  ],
  plugins: [
    nodeResolve({ extensions }),
    del({ targets: ['dist/*'] }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      ...babelConfig,
    }),
  ],
  external: (id) => {
    if (id.startsWith('@babel/runtime')) return true

    const peerDependencies = Object.keys(package_.peerDependencies || {})
    const dependencies = Object.keys(package_.dependencies || {})
    return (
      peerDependencies.some((depName) => id.startsWith(depName)) ||
      dependencies.some((depName) => id.startsWith(depName))
    )
  },
}

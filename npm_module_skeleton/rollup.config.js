import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/node_module_skeleton.js",
  output: [
    {
      file: "dist/output.cjs.js",
      format: "cjs",
      exports: "default",
    },
    {
      file: "dist/output.esm.js",
      format: "esm",
      exports: "default",
    },
    {
      file: "dist/output.umd.js",
      format: "umd",
      name: "CollectorSearch",
      exports: "default",
    },
  ],
  plugins: [
    nodeResolve(),
    babel({ babelHelpers: "runtime", exclude: "**/node_modules/**" }),
    commonjs(),
  ],
};

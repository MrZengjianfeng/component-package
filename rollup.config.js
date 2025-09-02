import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "es",
    },
  ],
  plugins: [
    typescript({
      // 明确指定 module 为 esnext
      module: "esnext",
      // 或者使用 tsconfig 文件路径
      // tsconfig: './tsconfig.json'
    }),
  ],
};

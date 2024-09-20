import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react"],
  watch: process.env.TSUP_WATCH === "true",
  outDir: "dist",
  loader: {
    ".css": "css",
  },
});

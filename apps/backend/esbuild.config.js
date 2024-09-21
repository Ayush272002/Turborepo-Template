const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/**/*.ts"],
    bundle: true,
    platform: "node",
    outdir: "dist",
    external: [
      "mock-aws-s3",
      "aws-sdk",
      "nock",
      "@mapbox/node-pre-gyp",
      //   "bcrypt",
    ],
  })
  .catch(() => process.exit(1));

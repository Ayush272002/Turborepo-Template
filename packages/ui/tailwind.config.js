/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@repo/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
};

import sharedConfig from '@repo/tailwind-config/tailwind.config.js';
import shadcnPreset from './shadcn-preset.js';

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  presets: [shadcnPreset],
};

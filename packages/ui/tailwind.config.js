const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateX(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        'slidein': 'slidein 500ms ease forwards',
        'fadeIn': 'fadeIn 100ms ease forwards',
      }
    },
  },
  plugins: [],
};

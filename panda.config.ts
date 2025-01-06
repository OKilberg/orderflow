import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // for styled-component styles
  jsxFramework: "react",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    // "./src/**/*.{js,jsx,ts,tsx}",
    // "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/features/**/*.{ts,tsx,js,jsx}",
    "./src/shared/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "red" },
          secondary: { value: "gray" },
          blue: {
            700: { value: "#1953AB" },
            600: { value: "#2162C2" },
            500: { value: "#2A6DD2" },
            400: { value: "#4181E0" },
            300: { value: "#558EE5" },
            100: { value: "#D4E5FF" },
          },
        },
      },
    },
  },

  staticCss: {
    css: [
      {
        properties: {
          backgroundColor: ["blue.300"],
        },
      },
    ],
  },

  // The output directory for your css system
  outdir: "styled-system",
});

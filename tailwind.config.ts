import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "light-text": "var(--light-text)",

        "color-1": "var(--color-1)",
        "color-2": "var(--color-2)",

        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",

        "secondary-1": "var(--secondary-1)",
        "secondary-2": "var(--secondary-2)",
        "secondary-3": "var(--secondary-3)",
        "secondary-4": "var(--secondary-4)",
      },
      fontFamily: {
        "header-font": ["var(--font-libre-bodoni)"],
        "body-font": ["var(--font-poppins)"],
      },
      fontSize: {
        "header-text-1": "var(--font-size-header-1)",
        "header-text-2": "var(--font-size-header-2)",
        "header-text-3": "var(--font-size-header-3)",
        "body-text-1": "var(--font-size-text-1)",
        "body-text-2": "var(--font-size-text-2)",
      },
      fontWeight: {
        "header-font-weight-1": "var(--font-weight-header-1)",
        "header-font-weight-2": "var(--font-weight-header-2)",
        "body-font-weight-1": "var(--font-weight-text-1)",
        "body-font-weight-2": "var(--font-weight-text-2)",
      },

      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;

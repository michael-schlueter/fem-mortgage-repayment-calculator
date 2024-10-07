import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#D73328",
      white: "#FFFFFF",
      lime: "#D8D82F",
      black: "#000000",
      slate: {
        "100": "#E4F4FD",
        "300": "#9ABED5",
        "500": "#6B94A8",
        "700": "#4E6E7E",
        "900": "#133041",
      },
    },
    fontSize: {
      sm: ["0.875rem", "1.3125rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.40625rem"],
      xl: ["1.5rem", "1.875rem"],
      "2xl": ["3.5rem", "4.375rem"],
    },
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      dropShadow: {
        'custom': "0 32px 64px rgba(19, 48, 65, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;

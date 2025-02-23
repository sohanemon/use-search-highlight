import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.indigo,
        danger: colors.rose,
        warning: colors.yellow,
        success: colors.lime,
        info: colors.blue,
        gray: colors.zinc,
      }),
    },
  },
  plugins: [],
} satisfies Config;

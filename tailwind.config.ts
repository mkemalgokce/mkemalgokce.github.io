import type { Config } from "tailwindcss";

const withAlpha = (token: string) => `rgb(var(${token}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        "bg-subtle": withAlpha("--bg-subtle"),
        card: withAlpha("--card"),
        "card-muted": withAlpha("--card-muted"),
        fg: withAlpha("--fg"),
        "fg-muted": withAlpha("--fg-muted"),
        "fg-subtle": withAlpha("--fg-subtle"),
        border: withAlpha("--border"),
        "border-strong": withAlpha("--border-strong"),
        ring: withAlpha("--ring"),
        accent: {
          DEFAULT: withAlpha("--accent"),
          strong: withAlpha("--accent-strong"),
          fg: withAlpha("--accent-fg"),
        },
        "ios-blue": withAlpha("--accent"),
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(9 9 12 / 0.04), 0 10px 30px -12px rgb(9 9 12 / 0.12)",
        lift: "0 20px 50px -16px rgb(9 9 12 / 0.22)",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(var(--fg-muted))",
            "--tw-prose-headings": "rgb(var(--fg))",
            "--tw-prose-links": "rgb(var(--accent-strong))",
            "--tw-prose-bold": "rgb(var(--fg))",
            "--tw-prose-quotes": "rgb(var(--fg))",
            "--tw-prose-quote-borders": "rgb(var(--accent))",
            "--tw-prose-bullets": "rgb(var(--fg-subtle))",
            "--tw-prose-hr": "rgb(var(--border))",
            "--tw-prose-captions": "rgb(var(--fg-subtle))",
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            a: {
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": { textDecoration: "underline" },
            },
            h1: { fontWeight: "700", letterSpacing: "-0.02em" },
            h2: { fontWeight: "650", letterSpacing: "-0.01em" },
            h3: { fontWeight: "600" },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": "rgb(var(--fg-muted))",
            "--tw-prose-headings": "rgb(var(--fg))",
            "--tw-prose-links": "rgb(var(--accent-strong))",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

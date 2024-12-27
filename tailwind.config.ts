import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ios-blue': 'rgb(var(--ios-blue) / <alpha-value>)',
        'ios-gray': {
          50: 'rgb(var(--ios-gray-50) / <alpha-value>)',
          100: 'rgb(var(--ios-gray-100) / <alpha-value>)',
          200: 'rgb(var(--ios-gray-200) / <alpha-value>)',
          300: 'rgb(var(--ios-gray-300) / <alpha-value>)',
          400: 'rgb(var(--ios-gray-400) / <alpha-value>)',
          500: 'rgb(var(--ios-gray-500) / <alpha-value>)',
          600: 'rgb(var(--ios-gray-600) / <alpha-value>)',
          700: 'rgb(var(--ios-gray-700) / <alpha-value>)',
          800: 'rgb(var(--ios-gray-800) / <alpha-value>)',
          900: 'rgb(var(--ios-gray-900) / <alpha-value>)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            code: {
              backgroundColor: 'rgb(var(--ios-gray-100) / 1)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.375rem',
              fontWeight: '400',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: 'rgb(var(--ios-gray-100) / 1)',
              color: 'rgb(var(--ios-gray-900) / 1)',
              borderRadius: '0.75rem',
            },
            a: {
              color: 'rgb(var(--ios-blue) / 1)',
              '&:hover': {
                opacity: '0.8'
              }
            },
            h1: {
              fontWeight: '700'
            },
            h2: {
              fontWeight: '600'
            },
            h3: {
              fontWeight: '600'
            }
          }
        },
        invert: {
          css: {
            code: {
              backgroundColor: 'rgb(var(--ios-gray-800) / 1)',
            },
            pre: {
              backgroundColor: 'rgb(var(--ios-gray-800) / 1)',
              color: 'rgb(var(--ios-gray-50) / 1)',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config;

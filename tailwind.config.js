const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '50': '#F5F7FA',
          '100': '#F6F8FA',
          '200': '#E2E4E9',
          '400': '#99A0AE',
          '500': '#525866',
          '700': ' #344054',
          '950': '#0E121B'
        },
        green: {
          dark: '#47CD89',
          light: '#DCFAE6'
        },
        transitionDuration: {
          DEFAULT: '300ms'
        }
      }
    },
    fontFamily: {
      sans: [
        ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        { fontFeatureSettings: "'liga', 'calt', 'opsz'" }
      ]
    },
    animation: {
      pulsing: 'pulsing 1s ease-in-out infinite',
    },
    keyframes: {
      pulsing: {
        from: {
          boxShadow: '0 0 0 0 rgb(71 205 137 /.05)'
        },
        '90%': {
          boxShadow: '0 0 0 3px rgb(71 205 137 / .5)'
        },
        to: {
          boxShadow: '0 0 0 0 rgb(71 205 137 / .05)'
        }
      }
    }
  }
}

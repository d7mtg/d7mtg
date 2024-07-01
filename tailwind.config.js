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
    }
  }
}

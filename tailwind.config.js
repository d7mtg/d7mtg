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
          '200': '#E2E4E9',
          '500': '#525866',
          '950': '#0E121B'
        }
      }
    },
    fontFamily: {
      sans: [
        ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        { fontFeatureSettings: "'liga', 'calt', 'opsz'" }
      ]
    },
    transitionDuration: {
      DEFAULT: '300ms'
    }
  }
}

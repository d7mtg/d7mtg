/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: [
        ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        { fontFeatureSettings: "'dlig', 'liga', 'calt', 'salt', 'cv11'" }
      ]
    },
    extend: {}
  }
}

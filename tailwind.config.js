const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        error: 'var(--error-color)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          variant: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        'on-primary': 'var(--on-primary)',
        link: {
          DEFAULT: 'var(--link)',
          dark: 'var(--link-dark)',
        },
        canvas: {
          DEFAULT: 'rgb(var(--canvas-default) / <alpha-value>)',
          muted: 'rgb(var(--canvas-muted) / <alpha-value>)',
        },
        fg: {
          DEFAULT: 'rgb(var(--fg-default) / <alpha-value>)',
          emphasis: 'rgb(var(--fg-primary) / <alpha-value>)',
          muted: 'rgb(var(--fg-muted) / <alpha-value>)',
        },
      },
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}

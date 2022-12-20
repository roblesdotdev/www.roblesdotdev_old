/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        error: 'var(--error-color)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        'on-primary': 'var(--on-primary)',
        link: {
          DEFAULT: 'var(--link)',
          dark: 'var(--link-dark)',
        },
        canvas: {
          DEFAULT: 'var(--canvas-default)',
          primary: 'var(--canvas-primary)',
          overlay: 'var(--overlay)',
        },
        fg: {
          DEFAULT: 'var(--fg-default)',
          primary: 'var(--fg-primary)',
          muted: 'var(--fg-muted)',
        },
        'border-color': 'var(--border-color)',
      },
    },
  },
  plugins: [],
}

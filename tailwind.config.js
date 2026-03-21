/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Important: use `extend` so we don't replace Tailwind's default theme
    // (colors, spacing, etc).
    extend: {
      colors: {
        'primary-yellow': '#FFC107',
        black: '#000000',
        white: '#FFFFFF',
        'accent-red': '#FF3D00',
      },
      fontFamily: {
        // Default body font.
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        // Optional: headings can opt into this via `font-heading`.
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}

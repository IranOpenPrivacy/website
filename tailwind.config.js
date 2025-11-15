/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#276EF6',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'IRANSans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


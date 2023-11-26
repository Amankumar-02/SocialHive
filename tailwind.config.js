/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#4CB5F9',
        'regal2-blue': '#2da4f1',
      },
    },
  },
  plugins: [],
}


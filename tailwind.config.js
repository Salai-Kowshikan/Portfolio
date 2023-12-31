/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textc':'#c9a30a',
        'primary': '#d6cba1',
        'secondary': '#767575',
        'background': '#000000',
        'accent': "#dbc053",
      }
    },
  },
  plugins: [],
}

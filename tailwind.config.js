/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgb(204,228,218)',
        'custom-purple': 'rgb(146,179,243)'
      }
    },
  },
  plugins: [],
};

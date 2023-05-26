/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgb(204,228,218)',
        'custom-purple': 'rgb(146,179,243)',
        'custom-black': 'rgb(10,13,16)',
        'custom-weather-1': 'rgb(187,219,214)',
        'custom-weather-2': 'rgb(117,187,198)'
      }
    },
  },
  plugins: [],
};

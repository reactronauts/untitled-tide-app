/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#219EBC',
        'dark-blue': '#023047',
        'yellow': '#FFB703',
        'orange': '#FB8500',
        'dm-lb': '#1E4152',
        'dm-db': '#0A121B',
        'dm-y': '#854500',
        'dm-o': '#7F3100',
      },
    
      colors: {
        'custom-green': 'rgb(204,228,218)',
        'custom-purple': 'rgb(146,179,243)',
        'custom-black': 'rgb(10,13,16)'
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // default: {
        //   text: '#023047', // Default text color
        //   background: '#219EBC', // Default background color
        //   button: '#FB8500', // Default button color
        // },
        // dark: {
        //   text: '#0A121B', // Dark mode text color
        //   background: '#7F3100', // Dark mode background color
        //   button: '#345F8A', // Dark mode button color
        // },
          'light-blue': '#219EBC',
          'dark-blue': '#023047',
          'yellow': '#FFB703',
          'orange': '#FB8500',
          'dm-lb': '#345F8A',
          'dm-db': '#0A121B',
          'dm-y': '#854500',
          'dm-o': '#7F3100',
        },
      },
    },
  plugins: [],
};

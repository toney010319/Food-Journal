/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        'text': '#0d0c02',
        'background': '#fdfded',
        'primary': '#ffee00',
        'secondary': '#6fc349',
        'accent': '#744c07',
       },
    },
  },
  plugins: [],
};

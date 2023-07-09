/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        'pulse':'pulse 1s infinite'
      },
      transitionDuration:{
        '100':'100ms',
      },
      colors: {
        
        // Light Mode
        "burnt-orange": "#F9662A", 
        "midnight-shadow":"#222129",
        "blue-gray":"#B2B3CF",
        "dusty-gray":"#7F7A8D",
        "cloud-gray":"#E0E0E0",

        // Dark Mode
        "midnight-blue":"#234B75",
      },
      height:{

        '40vh':"40vh",
        '50vh':"50vh",
        '60vh':"60vh",
        '70vh':"70vh",

      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};


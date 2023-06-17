/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Jost'
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        primary: '#224093',
        accent: '#00A877',
        secondary: '#FDB915',
        background: '#F5F5F5'
      }
    },
  },
  plugins: [],
}
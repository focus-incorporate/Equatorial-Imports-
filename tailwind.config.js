/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        brand: {
          orange: '#E67E22', // Logo's orange splash
          brown: '#4A332F',  // Logo's coffee bean
          green: '#2ECC71',  // Logo's leaf
          cream: '#FDF6E3',  // Background color
        },
        coffee: {
          light: '#8B7355',
          DEFAULT: '#6F4E37',
          dark: '#4A3C31',
        },
        cream: {
          light: '#FDF6E3',
          DEFAULT: '#F5E6D3',
          dark: '#E6D5C3',
        },
        accent: {
          orange: '#E67E22',
          green: '#2ECC71',
        }
      },
      backgroundImage: {
        'logo-pattern': "url('/images/logo-pattern.png')",
        'hero-pattern': "linear-gradient(to right bottom, rgba(253, 246, 227, 0.9), rgba(245, 230, 211, 0.9))",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 
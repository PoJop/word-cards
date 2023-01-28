/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    divideOpacity: false,
    borderOpacity: false,
    placeholderOpacity: false,
  },
  theme: {
    screens: {
      'vsm': '330px',
      // => @media (min-width: 330px) { ... }
      'msm': '500px',
      // => @media (min-width: 500px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
      },
      zIndex: {
      },
      borderRadius: {
      },
      boxShadow: {
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '1.4xl': '1.4rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '3xl2': '2rem',
        '4xl': '2.625rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}

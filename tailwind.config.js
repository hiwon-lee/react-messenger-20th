// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5B5FC7',
        secondary: '#FBDED8',
        accent: '#D6E3E9',
        pink: {
          light: '#E6CED0',
          dark: '#53151A',
        },
        gray: {
          100: '#DFDFDF',
          500: '#919191',
          700: '#676767',
        },
      },
      fontSize: {
        heading: '24px',
        body: '14px',
        caption: '12px',
        title: '18px',
        subtitle: '16px',
        largeHeading: '22px',
      },
    },
  },
  variants: {},
  plugins: [],
};

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
          50: '#F1F1F1',
          100: '#DFDFDF',
          500: '#919191',
          700: '#676767',
          900: '#212121',
        },
      },
      fontSize: {
        heading: '24px',
        largeHeading: '22px',
        title: '18px',
        subtitle: '16px',
        body: '14px',
        caption: '12px',
        small: '10px',
      },
    },
  },
  variants: {},
  plugins: [],
};

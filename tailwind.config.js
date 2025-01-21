/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#E82C19',
        secondary: '#0640FC',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#808080',
      },
      fontFamily: {
        sans: ['BLMelody', 'sans-serif'], // Default to BLMelody
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
    screens: {
      xs: '479px', // xs for 480px and above
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

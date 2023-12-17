import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: { // https://tailwindcss.com/docs/animation#customizing-your-theme
        shake: 'shake 1s ease-in-out', // https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translateX(-1px)',
          },
          '20%, 80%': {
            transform: 'translateX(2px)',
          },
          '30%, 50%, 70%': {
            transform: 'translateX(-4px)',
          },
          '40%, 60%': {
            transform: 'translateX(4px)',
          },
        }
      }
    }
  },
  plugins: [
    forms,
  ],
}


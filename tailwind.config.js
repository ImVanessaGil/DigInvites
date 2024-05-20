/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            'OffWhite': 'hsl(0,0%,85.1%)',
            'DarkBlue': 'hsl(210, 33%, 9%)',
          },
    },
  },
  plugins: [],
}


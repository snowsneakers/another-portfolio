/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               fontFamily: {
                    roboto: ["Roboto", "sans-serif"],
                    robotoMono: ["Roboto Mono", "sans-serif"],
               },
               screens: {
                    md: "880px",
               },
          },
     },
     plugins: [],
};

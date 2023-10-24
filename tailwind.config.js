/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        atyp_display_Regular: ["atyp_display_regular"],
        atyp_display_Medium: ["atyp_display_medium"],
      },
      colors: {
        "custom-black": "#1D1D1B",
        "custom-purple": "#7C56F6",
        "custom-gray": "#262624",
        "custom-blue": "#6EC1E4",
      },
    },
  },
  plugins: [],
};

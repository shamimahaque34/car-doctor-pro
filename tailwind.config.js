/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        carDoctorTheme: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF3811",
          secondary: "teal",

          ".btn-primary": {
            "color" : "#fff"
          },

          ".btn-outline.btn-primary:hover": {
            "color" : "#fff"
          },
        },
      },
      "dark",
    ],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      colors: {
        grayish: "#393E46",
        lightblue: "#00ADB5",
        cream: "#EEEEEE",
        darkblue: "#222831",
      },
      backgroundImage: {
        'hero': "linear-gradient(to bottom,rgba(15, 211, 254, 0.376), rgba(252, 252, 252, 0.4))",
        'professional-bg': "linear-gradient(to top,rgba(4, 9, 51, 0.9), rgba(252, 252, 252, 0.5)),url('./assets/images/professional.jpg')",
        'experience-bg': "url('./assets/images/bg-experience.jpg')",
        'about-bg': "url('./assets/images/About.png')",
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

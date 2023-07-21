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
        'hero': "linear-gradient(to top,rgba(4, 9, 51, 0.9), rgba(252, 252, 252, 0.5)), url('./assets/images/hero-bg.jpg')",
        'professional-bg': "linear-gradient(to top,rgba(4, 9, 51, 0.9), rgba(252, 252, 252, 0.5)),url('./assets/images/professional.jpg')",
        'experience-bg': "linear-gradient(to top,rgba(4, 9, 51, 0.2), rgba(238, 238, 238, 0.9)),url('./assets/images/experience-bg.jpg')",
        'education-bg': "linear-gradient(to top,rgba(4, 9, 51, 0.2), rgba(238, 238, 238, 0.9)),url('./assets/images/education-bg.jpg')",
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

import weatherApp from "../../assets/images/projects-images/weather-app.jpeg";
import reatMealApp from "../../assets/images/projects-images/react-meal-app.jpg";
import amazonProductApi from "../../assets/images/projects-images/amazon-product-api.png";

import studioApp from "../../assets/images/projects-images/studio-app.png";

import expenseManager from "../../assets/images/projects-images/expense-manager.jpg";

const projectData = [
  {
    id: 1,
    name: "React Weather App",
    description: "Real Time Weather Application made with React.js",
    img: weatherApp,
    tools: "React.js, OpenWeatherMap API, Axios.",
    link: "https://weather-sw7s.onrender.com",
  },
  {
    id: 2,
    name: "React Meal App",
    description: "Impementation of e-commerce website cart",
    tools: "React.js, Redux, context API, React Hooks.",
    img: reatMealApp,
    link: "http://imranansari.me/react-meal-app/",
  },
  {
    id: 3,
    name: "Expense Manager",
    description:
      "A simple website for manage Your expense. You can add expense and can see your the monthly expenses.",
    img: expenseManager,
    tools: "React.js, React Hooks.",
    link: "https://github.com/imranansari72/expense-manager",
  },
  {
    id: 4,
    name: "Amazon Product Api",
    description: "Fetches product data from Amazon.",
    img: amazonProductApi,
    tools: "Python, BeautifulSoup, Requests.",
    link: "https://amazon-product-api.herokuapp.com/",
  },
  {
    id: 5,
    name: "Studio App Design",
    description: "Design of a studio app using React.js and TailwindCSS.",
    img: studioApp,
    tools: "React.js, TailwindCSS, React Hooks.",
    link: "https://github.com/imranansari72/studio-app-design",
  },
];

export { projectData };

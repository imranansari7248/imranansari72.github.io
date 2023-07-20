import weatherApp from "../../assets/images/projects-images/weather-app.jpeg";
import reatMealApp from "../../assets/images/projects-images/react-meal-app.jpg";
import amazonProductApi from "../../assets/images/projects-images/amazon-product-api.png";

import studioApp from "../../assets/images/projects-images/studio-app.png";

import expenseManager from "../../assets/images/projects-images/expense-manager.jpg";

// languages  Databases
import javascript from "../../assets/images/skills/javascript.jpg";
import python from "../../assets/images/skills/python.jpg";
import html from "../../assets/images/skills/html.jpg";
import css from "../../assets/images/skills/css.jpg";
import c from "../../assets/images/skills/c.png";
import cplus from "../../assets/images/skills/c++.png";
import sql from "../../assets/images/skills/mysql-logo-1-300x300.jpg";
import postgresql from "../../assets/images/skills/postgresql-logo.png";
import mongodb from "../../assets/images/skills/mongodb.png";

// libraries
import axios from "../../assets/images/skills/axios.png";
import redux from "../../assets/images/skills/redux.png";
import numpy from "../../assets/images/skills/numpy-logo-1-500x500.jpg";
import pandas from "../../assets/images/skills/pandas-logo-2-500x500.jpg";
import matplotlib from "../../assets/images/skills/matplotlib-logo-1-500x500.jpg";

// frameworks
import react from "../../assets/images/skills/react.png";
import express from "../../assets/images/skills/express.png";
import node from "../../assets/images/skills/nodejs.png";
import tailwind from "../../assets/images/skills/tailwindcss.jpg";

// other
import git from "../../assets/images/skills/git.png";
import aws from "../../assets/images/skills/aws.png";
import heroku from "../../assets/images/skills/heroku.png";

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

const skills = [
  {
    name: "Languages and Databases",
    skills: [
      {
        name: "JavaScript",
        img: javascript,
      },
      {
        name: "Python",
        img: python,
      },
      {
        name: "HTML",
        img: html,
      },
      {
        name: "CSS",
        img: css,
      },
      {
        name: "C",
        img: c,
      },
      {
        name: "C++",
        img: cplus,
      },
      {
        name: "MySQL",
        img: sql,
      },
      {
        name: "PostgreSQL",
        img: postgresql,
      },
      {
        name: "MongoDB",
        img: mongodb,
      },
    ],
  },
  {
    name: "Libraries",
    skills: [
      {
        name: "Axios",
        img: axios,
      },
      {
        name: "Redux",
        img: redux,
      },
      {
        name: "NumPy",
        img: numpy,
      },
      {
        name: "Pandas",
        img: pandas,
      },
      {
        name: "Matplotlib",
        img: matplotlib,
      },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      {
        name: "React.js",
        img: react,
      },
      {
        name: "Express.js",
        img: express,
      },
      {
        name: "Node.js",
        img: node,
      },
      {
        name: "TailwindCSS",
        img: tailwind,
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "Git",
        img: git,
      },
      {
        name: "AWS",
        img: aws,
      },
      {
        name: "Heroku",
        img: heroku,
      },
    ],
  },
];

export { projectData, skills };

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

// contact icons

import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

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

const educations = [
  {
    id: 1,
    university: "Govind Ballabh Pant University of Agriculture and Technology",
    place: "Pantnagar, Uttarakhand",
    degree: "B.Tech in Mechanical Engineering",
    duration: "2020 - Present",
    cgpa: "7.5/10",
  },
  {
    id: 2,
    university: "Jawahar Navodaya Vidyalaya",
    place: "Haridwar, Uttarakhand",
    degree: "Senior Secondary Education",
    duration: "2014 - 2019",
    cgpa: "9/10",
  },
];

const experiences = [
  {
    id: 1,
    name: "College Web Team",
    position: "Webmaster",
    duration: "August 2021 - Present",
    place: "GBPUAT, Pantnagar",
    description: [
      "Led the college web team as the Webmaster, overseeing the development and maintenance of the college website.",
      "Managed a team of web developers and designers, coordinating their efforts to ensure seamless collaboration and timely delivery.",
      "Utilized React.js and Express.js to create interactive and dynamic features on the college website, enhancing the user experience.",
      "Implemented best practices in web development, including responsive design, accessibility, and optimization techniques.",
    ],
    tools: "React.js, Express.js, Node.js, MySQL, HTML/CSS, JavaScript",
  },
  {
    id: 3,
    name: "Amazon Product API",
    position: "Web Developer",
    duration: "June 2021",
    place: "Remote",
    description: [
      "Developed a web application that fetches product data from Amazon using Python, BeautifulSoup, and Requests.",
      "Deployed the application on Heroku, allowing users to access the application from anywhere.",
    ],
    tools: "Python, BeautifulSoup, Requests, Heroku",
  },
  {
    id: 4,
    name: "STUDENT DATA MANAGER APP",
    position: "Personal Project",
    duration: "December 2018 - February 2019",
    place: "JNV, Haridwar",
    description: [
      "Developed a Student Data Manager application as a personal project during my time at JNV, Haridwar.",
      "Created the application using C++, utilizing SQL and Excel sheets for efficient storage and management of student data.",
      "Integrated Excel sheets as an interface to facilitate data entry and retrieval by school staff.",
      "Collaborated closely with school administrators and teachers to understand their requirements and ensure the application met their needs.",
    ],
    tools: "C++, SQL, Excel",
  },
];


const contactIcons = {
  emailIcon: <MdEmail size={25} />,
  phoneIcon: <IoMdCall size={25} />,
  githubIcon: <BsGithub size={25} />,
  linkedinIcon: <BsLinkedin size={25} />,
};

export { projectData, skills, educations, experiences, contactIcons };

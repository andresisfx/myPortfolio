import html from "../assets/html.png";
import css from "../assets/css3.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import angular from "../assets/angular.png"
import express from "../assets/express.png";
import nodejs from "../assets/nodejs.png";
import postgres from "../assets/postgres.png";
import sequelize from "../assets/sequelize.png";
import next from "../assets/next.png";
import firebase from "../assets/firebase.png";
import tennis from "../assets/tennis.png"
import git from "../assets/git.png";


// PROJECTS

import pokemon from "../assets/pokemon.png";
import fixer from "../assets/fixershoes.png";

export const frontSkills = [
  {
    name: "Html5",
    img: html,
  },
  {
    name: "Css3",
    img: css,
  },
  {
    name: "Bootstrap",
    img: bootstrap,
  },
  {
    name: "Javascript",
    img: javascript,
  },
  {
    name: "React.js",
    img: react,
  },
  {
    name: "Redux.js",
    img: redux,
  },
  {
    name: "Angular.js",
    img: angular,
  },
  {
    name: "Next.js",
    img: next,
  }
];

export const backSkills = [
  {
    name: "express.js",
    img: express,
  },
  {
    name: "Node.js",
    img: nodejs,
  },
  {
    name: "PostgreSQL",
    img: postgres,
  },
  {
    name: "Sequelize",
    img: sequelize,
  },
  
];

export const otherSkills = [
  {
    name: "Firebase",
    img: firebase,
  },
  {
    name: "Git",
    img: git,
  },

];

export const projects = [
  {
    name: "Fixer Shoes e-commerce",
    origin:
      "e-commerce for a Colombian company",
    img: fixer,
    description:
      "Single page application, completly functional. with login, database, register of user, dashboards, statistics and much more",
    tech: "React, Redux, Javascript, Tailwind, Css, PostgreSQL, Express, Sequelize, Apis, Node.js",
    link: "https://e-commerce.fixershoes.com/",
  },
  {
    name: "Tennis App",
    origin: "technical test",
    img: tennis,
    description:
    "An intuitive single-page application that allows users to seamlessly register for championships, while providing administrators with efficient tools to manage championships, participants, and scores",
    tech: "Next.js, Javascript, Tailwind, Firebase, Node.js",
    link: "https://tennis-championship.vercel.app/",
  },
  {
    name: "Yadira Mayac S.A.S",
    origin: "Single page app for a colombian company",
    img: pokemon,
    description:
      "An informative single-page app with admin roles, login, and upload/download document functionalities. It provides detailed content on a specific topic, allowing users to access, share, and manage relevant files easily ",
    tech: "Angular.js, Firebase, HTML, CSS-Boostrap",
    link: "https://yadiramayac.web.app/",
  },
  {
    name: "Pokemon App",
    origin: "Individual Project for SoyHenry",
    img: pokemon,
    description:
      "Single page application, with filters and creation form. consuming the pokemon api. Using PostgreSQL to save the created pokemons.",
    tech: "React, Redux, Javascript, Css, PostgreSQL, Express, Sequelize, Apis, Node.js",
    link: "https://pokemon-project-blue.vercel.app",
  },
];

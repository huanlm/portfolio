import React from 'react'
import Project from '../project/Project'
import './portfolio.scss'

function Portfolio() {
  const projects = [
    {
      name: "UCSD ASAP",
      desc: "A 10-member team made program that helps students find different combinations of schedule based on the chosen classes. The program uses a mix of greedy and brute force algorithms to find the most optimized schedule based on GPA, Professor Ratings, Break gaps and Required courses.",
      links: "https://github.com/huanlm/ASAP",
      images: ['https://i.imgur.com/Fqf2rFo.png', 'https://i.imgur.com/6tHRiDk.png', 'https://i.imgur.com/XcD4Dps.png', 'https://i.imgur.com/dSsoJQu.png'],
      techs: ["Python", "JavaScript", "HTML", "MySQL"],
      icon: "https://i.imgur.com/ZZQ6Ga1.png"
    },
    {
      name: "Front End Certification",
      desc: "An extensive course from FreeCodeCamp regarding front end development. The main framework in this course is React. Not only that this course taught me about newer techs like React, it also helps me understand fundamental of front end development which affect greatly on how I perform at my job. ",
      links: "https://www.freecodecamp.org/certification/fcc74f642bb-d7b6-4a9c-9529-45ef6889d867/front-end-development-libraries",
      images: ['https://i.imgur.com/dC8Ps89.png'],
      certification: true,
      techs: ["React", "Bootstrap", "Javascript", "CSS"],
      icon: "https://i.imgur.com/lud5QKy.png"
    },
    {
      name: "Back End and APIs Certification",
      desc: "An extensive course in Back End and APIs development, I learnt how to write back end apps/API using Node.js and NPM. This course also taught me the fundamentals of back end development which I find very useful when resolving tasks in day to day job.",
      links: "https://www.freecodecamp.org/certification/fcc74f642bb-d7b6-4a9c-9529-45ef6889d867/back-end-development-and-apis",
      images: ['https://i.imgur.com/HdM05Zy.png'],
      certification: true,
      techs: ["NodeJS", "CRUD", "Express", "MongoDB"],
      icon: "https://i.imgur.com/lud5QKy.png"
    },
    {
      name: "Hotels Clone",
      desc: "A full stack project that looks up and reservesv hotels in many different locations. The back end API allow admin to modify database using CRUD operation. The front end of application is written in React and is inspired by hotels and booking websites.",
      links: "https://github.com/huanlm/Hotels-Clone-App",
      images: ['https://i.imgur.com/zSArG1F.png','https://i.imgur.com/jhPufwV.jpg', 'https://i.imgur.com/W9n8Pxm.jpg','https://i.imgur.com/deO2UFp.jpg', 'https://i.imgur.com/ckVbH4T.png','https://i.imgur.com/Z5gIvjc.jpg'],
      techs: ["MongoDB", "Express", "React", "NodeJS"],
      icon: "https://i.imgur.com/ClXcmKe.png"
    },
  ]
  return (
    <div className="projPage" id="portfolio">
      <h1 className="projSectTitle sectionTitle">Projects</h1>
      <div className="projects">
        {projects.map((item, key) => (
          <Project project={item} key={key} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio

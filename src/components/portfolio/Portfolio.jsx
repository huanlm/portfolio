import React from 'react'
import { icons } from 'react-icons/lib'
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
      desc: "An extensive course from FreeCodeCamp regarding front end development. The main technologies in this course are HTML, CSS, React, JavaScript. The course required me to complete many projects which are included in the certification link below",
      links: "https://www.freecodecamp.org/certification/fcc74f642bb-d7b6-4a9c-9529-45ef6889d867/front-end-development-libraries",
      images: ['../../images/homeCover.jpg'],
      certification: true,
      techs: ["React", "Bootstrap", "Javascript", "CSS"],
      icon: "http://assets.stickpng.com/images/5847f91ccef1014c0b5e48b8.png"
    },
    {
      name: "Back End and APIs Certification",
      desc: "An extensive course in Back End and APIs development, I learnt how to write back end apps with Node.js and npm. I also built web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
      links: "https://www.freecodecamp.org/certification/fcc74f642bb-d7b6-4a9c-9529-45ef6889d867/back-end-development-and-apis",
      images: ['../../images/homeCover.jpg'],
      certification: true,
      techs: ["NodeJS", "CRUD", "Express", "MongoDB"],
      icon: "http://assets.stickpng.com/images/5847f91ccef1014c0b5e48b8.png"
    },
    {
      name: "Hotels Clone",
      desc: "A full stack project that looks up and reservesv hotels in many different locations. The back end and API allow admin to modify database using CRUD operation. The front end of application is written in React and is inspired by hotels and booking websites.",
      links: "https://github.com/huanlm/Hotels-Clone-App",
      images: ['../../images/homeCover.jpg'],
      techs: ["MongoDB", "Express", "React", "NodeJS"],
      icon: "http://assets.stickpng.com/thumbs/60361248d5d099000442a802.png"
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

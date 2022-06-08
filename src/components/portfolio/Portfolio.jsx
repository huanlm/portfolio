import React from 'react'
import Project from '../project/Project'
import './portfolio.css'

function Portfolio() {
  const projects = [
    {
      name:"UCSD ASAP",
      desc:"Full stack project made by group of 10 students.",
      links:"https://github.com/huanlm/ASAP",
      images: ['../../images/homeCover.jpg'],
    },
    {
      name:"Front End Certification",
      desc:"An extensive course from FreeCodeCamp regarding front end development. The main technologies in this course are HTML, CSS, React, JavaScript. The course required me to complete many projects which are included in the certification link below",
      links:"https://www.freecodecamp.org/certification/fcc74f642bb-d7b6-4a9c-9529-45ef6889d867/front-end-development-libraries",
      images: ['../../images/homeCover.jpg'],
      certification: true,
    },
    {
      name:"Back End and APIs Certification",
      desc:"An extensive course in Back End and APIs development, I learnt how to write back end apps with Node.js and npm. I also built web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
      links:"https://www.freecodecamp.org/certification/fcc74f642bb-d7b6-4a9c-9529-45ef6889d867/back-end-development-and-apis",
      images: ['../../images/homeCover.jpg'],
      certification: true,
    },
    {
      name:"Hotels Clone",
      desc:"MERN stack project that simulate hotels.com site. I learnt many things from this project including itermediate and advance features of React.",
      links:"https://github.com/huanlm/Hotels-Clone-App",
      images: ['../../images/homeCover.jpg'],
    },
  ]
  return (
    <div className="projPage">
      <h1 className="projSectTitle">Projects</h1>
      <div className="projects">
        {projects.map((item) => (
          <Project project={item} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio

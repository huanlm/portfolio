import React from 'react'
import Project from '../project/Project'
import './portfolio.css'

function Portfolio() {
  const projects = [
    {
      name:"Hotels Clone",
      desc:"MERN stack project that simulate hotels.com site. I learnt many things from this project including itermediate and advance features of React.",
      git:"https://www.github.com",
      images: ['../../images/homeCover.jpg'],
    },
    {
      name:"UCSD ASAP",
      desc:"Full stack project made by group of 10 students.",
      git:"https://www.github.com",
      images: ['../../images/homeCover.jpg'],
    },
    {
      name:"6 Degrees of Kevin Bacon",
      desc:"C++ graph theory projec to find connections between actor based on movies they were in",
      git:"https://www.github.com",
      images: ['../../images/homeCover.jpg'],
    },
    {
      name:"Monster Hunter",
      desc:"JAVA 2D game project.",
      git:"https://www.github.com",
      images: ['../../images/homeCover.jpg'],
    }
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

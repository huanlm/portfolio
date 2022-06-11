import React from 'react'
import './project.scss'

function Project({project}) {
  return (
    <>
      <div className="projCard">
        <h3 className="projTitle">
          {project.icon != "" && <img className="projIcon" src={project.icon} alt="" />}
          {project.name}
        </h3>
        
        <div className="projTechs">
          {
            project.techs.map((item, key) => (
              <span key={key}>{item}</span>
            ))
          }
        </div>
        <div className="projImg">
          <img src={project.images[0]} alt="" />
        </div>
        <p className="projDesc">
          {project.desc}
        </p>
        <button className="projLink">
          {<a href={project.links} rel="noreferrer" target="_blank">{!project.certification ? "Github" : "Certificate"}</a>}
        </button>
      </div>
    </>
  )
}

export default Project

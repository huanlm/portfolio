import React from 'react'
import './project.css'

function Project({project}) {
  console.log(project.images[0])
  return (
    <>
      <div className="projCard">
        <h3 className="projTitle">
          {project.name}
        </h3>
        <img className="projImg" src={project.images[0]} alt="" />
        <p className="projDesc">
          {project.desc}
        </p>
        <button className="projLink">
          {<a href={project.links} target="_blank">{!project.certification ? "Github" : "Certificate"}</a>}
        </button>
      </div>
    </>
  )
}

export default Project

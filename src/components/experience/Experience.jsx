import React from 'react'
import './experience.css'

function Experience() {
  return (
    <div className="exPage">
      <h1 className="exTitle">Experience</h1>
      <div className="exItems">
        <div className="images">
          <img src="" alt="none"/>
        </div>
        <div className="exItem">
          <h1> Jr. Software Engineer </h1>
          <h2> Snapiot/Labcorp (2020 - Current)</h2>
          <div className="exInfo">
            <ul>Develop software for clinical trials using SnapClinical infrastructure</ul>
            <ul>Create and deploy software with precicion and efficiency in only 12 weeks</ul>
            <ul>Create reusable components that will be used as default baseline for newer projects</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

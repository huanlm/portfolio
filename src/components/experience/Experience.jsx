import React from 'react'
import './experience.scss'
import snapWeb from '../../images/SnapWeb.png'
import snapMobile from '../../images/SnapMobile.png'

function Experience() {
  return (
    <div className="exPage" id="experience">
      <h1 className="exTitle sectionTitle">Experience</h1>
      <div className="exItems">
        <div className="images">
          <img className="img1" src={snapWeb} alt="none" />
          <img className="img2" src={snapMobile} alt="none" />
        </div>
        <div className="exItem">
          <h1> Jr. Software Engineer </h1>
          <h3> Snapiot/Labcorp (2020 - Current)</h3>
          <ul>
            <li>Develop software for clinical trials using SnapClinical infrastructure</li>
            <li>Create and deploy Web and Mobile apps with precicion and efficiency in only 12 weeks</li>
            <li>Create reusable components that will be used as default baseline for newer projects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience

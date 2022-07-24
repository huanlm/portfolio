import React from 'react'
import './experience.scss'
import snapWeb from '../../images/SnapWeb.png'
import snapMobile from '../../images/SnapMobile.png'
import {TbExternalLink} from "react-icons/tb"

function Experience() {
  return (
    <div className="exPage" id="experience">
      <h1 className="exTitle sectionTitle">Experience</h1>
      <div className="exItems">
        <div className="images">
          <img className="img1" src={snapWeb} alt="none" />
          <img className="img2" src={snapMobile} alt="none" />
        </div>
        <div className="jobDesc">
          <h1> Jr. Software Engineer </h1>
          <h3> Snapiot/Labcorp Drug Development (2020 - Current) <a href="https://drugdevelopment.labcorp.com" target="_blank"><TbExternalLink/></a></h3>
          <ul>
            <li>Develop applications for clinical trials using SnapClinical infrastructure</li>
            <li>Maintain software frontend and backend using Angular | JavaScript | Java Spring | MySQL</li>
            <li>Create standard libraries and main applications to improve efficiency for future projects</li>
            <li>Quick turnaround on feature enhancement requests from client</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience

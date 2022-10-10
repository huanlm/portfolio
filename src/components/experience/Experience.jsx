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
        <div className="imageWrapper">
          <img className="img1" src={snapWeb} alt="none" />
          <img className="img2" src={snapMobile} alt="none" />
        </div>
        <div className="jobDesc">
          <h1> Jr. Software Engineer </h1>
          <h3> SnapIoT/Labcorp Drug Development (2020 - Current) <a href="https://drugdevelopment.labcorp.com" rel="noreferrer" target="_blank"><TbExternalLink/></a></h3>
          
          <ul>
            <li>Develop applications for clinical trials using SnapClinical infrastructure 
              <ul>
                <li>Use HTML, JavaScript and CSS to design responsive front-end for clinical applications</li>
                <li>Use Flowable framework to create app flow diagrams and communicate with back-end</li>
              </ul>
            </li>
            <li>Assist in maintaining SnapClinical codebase using Angular, JavaScript, Spring Boot and MySQL</li>
            <li>Develop standard libraries and maintain applications to improve efficiency for future projects</li>
            <li>Create pull requests to keep older environments up to date with newly developed features</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience

import React from 'react'
import './experience.css'
import snapWeb from '../../images/SnapWeb.png'
import snapMobile from '../../images/SnapMobile.png'

function Experience() {
  return (
    <div className="exPage" id="experience">
      <h1 className="exTitle">My Journey</h1>
      <div className="exItems">
        <div className="images">
          <img className="img1" src={snapWeb} alt="none" />
          <img className="img2" src={snapMobile} alt="none" />
        </div>
        <div className="exItem">
          <h1> Jr. Software Engineer </h1>
          <h3> Snapiot/Labcorp (2020 - Current)</h3>
          <div className="exInfo">
            <ul>Develop software for clinical trials using SnapClinical infrastructure</ul>
            <ul>Create and deploy Web and Mobile apps with precicion and efficiency in only 12 weeks</ul>
            <ul>Create reusable components that will be used as default baseline for newer projects</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

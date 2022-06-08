import React from 'react'
import './about.css'

function About() {
  const technologyList = ["Java", "C++/C", "JavaScript", "Python", "React", "Angular", "NodeJS", "MongoDB", "Express", "API", "Git", "MySQL"]

  return (
    <div className="aboutPage">
      <h1 className="abTitle">About Me</h1>
      <div className="about">
        <div className="images">
          <img src="" alt="none"/>
        </div>
        <div className="aboutInfo">
          <div className="hiText">Hi there,</div>
          <br/>
          <div className="bio">My name is Huan Mai. I'm a passionate software developer based in San Diego, CA. I'm passionate in software development and I love to create software and solve new problems.
            <br/><br/>I'm currently working on myself to become a full stack developer. 
            My goal is to be adept in both front end and back end concept so I can make contribution whenever possible. 
            I'm employed as a Jr. Software Engineer and exposed to different technologies both in front end and back end. 
            I have lately gotten into the MERN stack (MongoDB, Express, ReactJS, NodeJS) as self improvement.
          </div>
          <div className="skills">
            <h2>Technologies:</h2>
            {technologyList.map((item) => (
              <button>{item}</button>
            ))}
          </div>  
        </div>
      </div>
    </div>
    
  )
}

export default About

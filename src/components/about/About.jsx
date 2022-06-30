import React from 'react'
import './about.scss'
import {FaReact , FaHtml5, FaCss3Alt, FaNodeJs, FaNpm, FaGithub, FaJava, FaPython} from 'react-icons/fa'
import {DiMongodb, DiMysql, DiJavascript} from 'react-icons/di'
import {SiFastapi, SiCsharp, SiCplusplus} from 'react-icons/si'

function About() {

  return (
    <div className="aboutPage" id="about">
      <h1 className="abTitle sectionTitle">About Me</h1>
      <div className="about">
        <div className="aboutInfo">
          <div className="hiText">Hi there,</div>
          <br/>
          <div className="bio">My name is Huan Mai. I'm a passionate software developer based in San Diego, CA who loves to create software and solve new problems.
          I graduated from UCSD in 2020 major in Applied Mathematics and minor in Computer Science.
          <br/><br/>
          I'm currently working on myself to become a full stack developer. My goal is to be adept in both front end and back end development so I can make contribution whenever possible. 
          </div>
        </div>
        <div className="skills">
            <div className="technologies">
              <h2>Technologies:</h2>
              <button>React <FaReact /></button>
              <button>HTML <FaHtml5 /></button>
              <button>CSS <FaCss3Alt /></button>
              <button>NodeJS <FaNodeJs /></button>
              <button>MongoDB <DiMongodb /></button>
              <button>NPM <FaNpm /></button>
              <button>API <SiFastapi /></button>
              <button>Git <FaGithub /></button>
              <button>MySQL <DiMysql /></button>
              <button>ASP.NET </button>
            </div>
            <div className="languages">
              <h2>Languages:</h2>
              <button>Java <FaJava /></button>
              <button>JavaScript <DiJavascript /></button>
              <button>Python <FaPython /></button>
              <button>C/C++ <SiCplusplus /></button>
              <button>C# <SiCsharp /></button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default About

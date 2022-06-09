import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaReact , FaHtml5, FaCss3Alt, FaNodeJs, FaNpm, FaGithub, FaJava, FaPython} from 'react-icons/fa'
import {DiNpm, DiMongodb, DiMysql, DiJavascript} from 'react-icons/di'
import {SiFastapi} from 'react-icons/si'


function About() {
  const technologyList = ["React", "HTML", "CSS", "NodeJS", "MongoDB", "Express", "API", "Git", "MySQL"]
  const languageList = ["Java", "JavaScript", "Python", "C/C++"]

  return (
    <div className="aboutPage" id="about">
      <h1 className="abTitle">About Me</h1>
      <div className="about">
        <div className="aboutInfo">
          <div className="hiText">Hi there,</div>
          <br/>
          <div className="bio">My name is Huan Mai. I'm a passionate software developer based in San Diego, CA. I love to create software and solve new problems.
            <br/><br/>I'm currently working on myself to become a full stack developer. 
            My goal is to be adept in both front end and back end concept so I can make contribution whenever possible. 
            I'm employed as a Jr. Software Engineer and exposed to different technologies both in front end and back end. 
            I have lately gotten into the MERN stack (MongoDB, Express, ReactJS, NodeJS) as self improvement.
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
            </div>
            <div className="languages">
              <h2>Languages:</h2>
              <button>Java <FaJava /></button>
              <button>JavaScript <DiJavascript /></button>
              <button>Python <FaPython /></button>
              <button>C/C++ </button>
            </div>
          </div> 
        </div>
      </div>
    </div>
    
  )
}

export default About

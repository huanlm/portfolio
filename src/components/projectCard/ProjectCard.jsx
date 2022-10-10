import React from 'react'
import './projectCard.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";

function Project({ project }) {
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? project.images.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === project.images.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <>
      <div className={(open) ? "slider" : "slider closed"}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="close"
          onClick={() => setOpen(false)}
        />
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="arrow"
          onClick={() => handleMove("l")}
        />
        <div className="sliderWrapper">
          <img src={project.images[slideNumber]} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className="arrow"
          onClick={() => handleMove("r")}
        />
      </div>

      <div className={!project.inProgress ? "projCard" : "projCard inprogress"}>
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
          <img
            src={project.images[0]}
            alt=""
            onClick={() => handleOpen(0)}
          />
         
          <i><FontAwesomeIcon
            icon={faComputerMouse}
            onClick={() => handleOpen(0)}
          /></i>
        </div>
        <p className="projDesc">
          {project.desc}
        </p>
        <div className="projLinksWrapper">
          {project.links.map((item) => (
            <button className={!project.inProgress ? "projLink" : "projLink inprogress"}>
              {<a href={item.link} rel="noreferrer" target="_blank">{item.name}</a>}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project

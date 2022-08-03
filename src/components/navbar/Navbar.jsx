import React, { useState } from 'react'
import './navbar.scss'
import { BsMenuButtonWide } from 'react-icons/bs'
import { IoCloseCircleOutline } from 'react-icons/io5'
import logo from '../../images/logo.png'
import {useScroll} from '../../hooks/useScroll'

function Navbar() {
  const { y, x, scrollDirection } = useScroll();  
  const [openMenu, setOpenMenu] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1tEXY-FKHAzsYlg2rN3PA_qI-Ld42SQb4/view?usp=sharing";

  const handleMenuClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <div className={scrollDirection === "up" ? "navContainer hidden": "navContainer"}>
        <img className="logo" src={logo} alt="" />
        <div className="navItems">
          {/* <a className="navButton" href="#home">
            Home
          </a> */}
          <a className="navButton" href="#about">
            About
          </a>
          <a className="navButton" href="#experience">
            Experience
          </a>
          <a className="navButton" href="#portfolio">
            Projects
          </a>
          <a className="navButton" href="#contact">
            Contact
          </a>
          <a className="navButton" href={resumeLink} target="_blank">
            Resume
          </a>
        </div>

        <button onClick={handleMenuClick} className={openMenu ? "menuButton open" : "menuButton"}>
          {!openMenu ? <BsMenuButtonWide /> : <IoCloseCircleOutline />}
        </button>
      </div>
      <div onTouchStart={handleMenuClick} className={openMenu ? "hamMenuWrapper open" : "hamMenuWrapper"}>
      </div>
      <div className={openMenu ? "hamMenu open" : "hamMenu"}>
          {/* <a onClick={handleMenuClick} className="navButton" href="#home">
            Home
          </a> */}
          <a onClick={handleMenuClick} className="navButton" href="#about">
            About
          </a>
          <a onClick={handleMenuClick} className="navButton" href="#experience">
            Experience
          </a>
          <a onClick={handleMenuClick} className="navButton" href="#portfolio">
            Projects
          </a>
          <a onClick={handleMenuClick} className="navButton" href="#contact">
            Contact
          </a>
          <a className="navButton" href={resumeLink} target="_blank">
            Resume
          </a>
        </div>
    </>
  )
}

export default Navbar

import React from 'react'
import './navbar.css'
import scrollToComponent from 'react-scroll-to-component'

function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="navItems">
          <a className="navButton" href="#home">
            Home
          </a>
          <a className="navButton" href="#about">
            About
          </a>
          <a className="navButton" href="#experience">
            Experience
          </a>
          <a className="navButton" href="#portfolio">
            Portfolio
          </a>
          <a className="navButton" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar

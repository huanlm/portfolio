import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="navItems">
          <button className="navButton" to="/">
            Home
          </button>
          <button className="navButton" to="/about">
            About
          </button>
          <button className="navButton" to="/experience">
            Experience
          </button>
          <button className="navButton" to="/portfolio">
            Portfolio
          </button>
          <button className="navButton" to="/contact">
            Contact
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar

import React, { useState } from 'react'
import './navbar.scss'
import {BsMenuButtonWide} from 'react-icons/bs'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <div className="navContainer">
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
            Portfolio
          </a>
          <a className="navButton" href="#contact">
            Contact
          </a>
        </div>
        
        <button onClick={handleMenuClick} className="menuButton"><BsMenuButtonWide /></button>
      </div>
      <div className={openMenu?"hamMenu open" : "hamMenu"}>
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
            Portfolio
          </a>
          <a onClick={handleMenuClick} className="navButton" href="#contact">
            Contact
          </a>
        </div>
    </>
  )
}

export default Navbar
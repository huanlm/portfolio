import React from 'react'
import './home.css'

function Home() {
  return (
    <>
      <div className="homeContainer" id="home">
        <div className="homeInfo">
          <h3 className="homeSmallText">Hi, I'm</h3>
          <h1 className="homeName">Huan Mai</h1>
          <h3>
            <span className="homeSmallText">and I'm a</span>
            <span className="homeStatement"> Software Developer</span>
          </h3>
        </div>
      </div>
    </>
  )
}

export default Home

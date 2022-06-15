import React from 'react'
import ScrollDown from '../scrollDown/ScrollDown'
import './home.scss'
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <>
      <div className="homeContainer" id="home">
        <div className="homeInfo">
          <h3 className="homeSmallText">Hi, I'm</h3>
          <h1 className="homeName">Huan Mai</h1>
          <span className="homeSmallText extra">and I'm a</span>
          <Typewriter
            options={{
              strings: ['<span class="homeStatement">Software Developer</span>'],
              autoStart: true,
              loop: true,
              cursorClassName: "homeStatement"
            }}
          />
          <ScrollDown className="scrollDown" />
        </div>
      </div>
    </>
  )
}

export default Home

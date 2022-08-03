import React from 'react'
import ScrollDown from '../scrollDown/ScrollDown'
import './home.scss'
import Typewriter from 'typewriter-effect'

function Home() {
  const openBracket = '{'
  const closeBracket = '}'
  return (
    <>
      <div className="homeContainer" id="home">
        <div className="homeInfo">
          <h3 className="homeSmallText">Hi, I'm</h3>
          <h1 className="homeName"><span className='symbol'>{openBracket}</span>Huan<span className='symbol'>:</span>Mai<span className='symbol'>{closeBracket}</span></h1>
          <span className="homeSmallText extra">and I'm a</span>
          <Typewriter
            options={{
              strings: ['<span class="homeStatement">Software Developer</span>', '<span class="homeStatement">Mobile App Developer</span>'],
              autoStart: true,
              loop: true,
              cursorClassName: "homeStatement",
              deleteSpeed: 19,
              delay: 90
            }}
          />
          <ScrollDown className="scrollDown" />
        </div>
      </div>
    </>
  )
}

export default Home

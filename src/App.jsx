import './App.scss';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles } from "./utils/particle.js"
import useVisible from "./hooks/useIsVisible";
import Loader from 'react-loaders';

function App() {
  const hasWindow = typeof window !== 'undefined'
  const [opacity, setOpacity] = useState(0)
  const aboutRef = useRef()
  const isAboutVisible = useVisible(aboutRef)
  const experienceRef = useRef()
  const isExperienceVisible = useVisible(experienceRef)
  const portfolioRef = useRef()
  const isPortfolioVisible = useVisible(portfolioRef)
  const contactRef = useRef()
  const isContactVisible = useVisible(contactRef)

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const handleElementsOnScroll = () => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset

      if (currentScrollPos > 750) {
        setOpacity(1)
      } else {
        setOpacity(0)
      }
    }
  }

  useEffect(() => {
    if (hasWindow) {
      handleElementsOnScroll()
    }
  }, [hasWindow])

  return (
    <>
      <div className="loaderWrapper">
        <Loader color="skyblue" type='ball-grid-pulse' />
      </div>
      <Particles id="particles" options={particles} init={handleInit} />
      <div className="App">
        <Navbar />
        <Home />
        {/* <div className='separator'></div> */}
        <div ref={aboutRef} className={isAboutVisible ? "section" : "section hidden"}><About /></div>
        {/* <div className='separator'></div> */}
        <div ref={experienceRef} className={isExperienceVisible ? "section" : "section hidden"}><Experience /></div>
        {/* <div className='separator'></div> */}
        <div ref={portfolioRef} className={isPortfolioVisible ? "section" : "section hidden"}><Portfolio /></div>
        {/* <div className='separator'></div> */}
        <div ref={contactRef} className={isContactVisible ? "section" : "section hidden"}><Contact /></div>
        <button className="goTopButton" style={{ opacity }} onClick={() => { window.scrollTo(0, 0) }}><BsFillArrowUpCircleFill /></button>
      </div>
    </>
  );
}

export default App;

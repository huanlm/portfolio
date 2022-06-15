import './App.scss';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {particles} from "./utils/particle.js"

function App() {
  const hasWindow = typeof window !== 'undefined'
  const [opacity, setOpacity] = useState(0)

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
    <Particles id="particles" options={particles} init={handleInit}/>
    <div className="App">
      <Navbar />
      <Home/>
      <div className='separator'></div>
      <div className="section"><About/></div>
      <div className='separator'></div>
      <div className="section"><Experience/></div>
      <div className='separator'></div>
      <div className="section"><Portfolio/></div>
      <div className='separator'></div>
      <div className="section"><Contact/></div>
      <button className="goTopButton" style={{ opacity }} onClick={()=>{window.scrollTo(0, 0)}}><BsFillArrowUpCircleFill/></button>
    </div>
    </>
  );
}

export default App;

import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function App() {
  const hasWindow = typeof window !== 'undefined'
  const [opacity, setOpacity] = useState(1)
  function handleElementsOnScroll() {
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
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <div className='separator'></div>
      <Experience/>
      <div className='separator'></div>
      <Portfolio/>
      <div className='separator'></div>
      <Contact/>
      <button className="goTopButton" style={{ opacity }} onClick={()=>{window.scrollTo(0, 0)}}><BsFillArrowUpCircleFill/></button>
    </div>
  );
}

export default App;

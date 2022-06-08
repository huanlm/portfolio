import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;

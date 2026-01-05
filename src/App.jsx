import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage'
import About from './components/about';
import References from './components/references';
import Contact from './components/contact';
import logo from './assets/Logo.svg'
import { FiMenu } from "react-icons/fi";
import AnimateAppear from './animation.jsx';
import './index.js'




function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  const burger = document.querySelector('#menuButton');
  const nav = document.querySelector('#navDiv');

  if (!burger || !nav) return;

  const toggleNav = () => {
    nav.classList.toggle('open');
  };

  burger.addEventListener('click', toggleNav);

  return () => {
    burger.removeEventListener('click', toggleNav);
  };
}, []);





  return (
    <>
      <Router>
        <AnimateAppear/>
      <header>
        <div id="header">
            <FiMenu id="menuButton"/>
          <div id='logoCont'>
            <Link to='/' onClick={()=>{
              document.querySelector('#navDiv').classList.remove('open')

            }}>
              <img src={logo} id="logo"/>
            
            </Link>
          </div>
          <div id="navDiv" >
            <Link to='/about' className='navLink' onClick={()=>{
              document.querySelector('#navDiv').classList.remove('open')

            }}>
              <p>About</p>
            </Link>
            
            <Link to='/references' className='navLink' onClick={()=>{
              document.querySelector('#navDiv').classList.remove('open')

            }}>
              <p>References</p>
            </Link>
           <Link to='/contact' className='navLink' onClick={()=>{
              document.querySelector('#navDiv').classList.remove('open')

            }}>
              <p>Contact</p>
            </Link>
            </div>
        </div>
      </header>
     

      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/references' element={<References />} />
        <Route path='/contact' element={ <Contact/> } />
        

      </Routes>
      
      </Router>
    </>
  )
}

export default App

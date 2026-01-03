import React from 'react'
import './css/home.css'
import comp from '../assets/comp.webp';

const Home = () => {
  return (
    <div id="home">

        <div id="imgCont">
            <img src={comp} alt="" id="backgroundImg" />  
                             
        </div>
        <div id="hero">
            <h1 id='heading'>Obonolo</h1>    
            <h2 id="heroDesc">A fullstack web and software developer in Botswana</h2>
            <div id='heroButtons'>
                <a id="aboutLink">
                    <button id="aboutBtn">
                        About
                    </button>
                 </a>
                 <a id="contactLink">
                    <button id="contactBtn">
                        Contact
                    </button>
                 </a>
            </div>
        </div> 
        
        
            
    </div>
    )
}

export default Home
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage'
import About from './components/about';
import References from './components/references';
import Contact from './components/contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <header>
        <div id="header">
          <h2>aom</h2>
          <div id="navDiv">
            <Link to='/about'>
              <p>About</p>
            </Link>
            
            <Link to='/references'>
              <p>References</p>
            </Link>
           <Link to='/contact'>
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

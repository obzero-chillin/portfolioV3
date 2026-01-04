import React, { useState } from 'react'
import './css/references.css'
import Reference from './subcomponents/reference.jsx'
import { useLocation } from 'react-router-dom'
import ref1 from '../assets/references/ref001.png'
const References = () => {
  let [selectedImage, setSelectedImage] = useState(null)
  
  return (
    <>
    {selectedImage && 
            
            <div id="fullscreenPic" onClick={()=>{setSelectedImage(null)}}>
                <img src={selectedImage} alt="" />
            </div>
            
            }
    
    
    <div id='references'>
        <h1 className='topic'>References</h1>
        <div id='referencesContainer'>
            <Reference 
              name='Mrs T. Kealotswe'
              image={ref1}
              onOpen={()=>setSelectedImage(ref1)}/>
        </div>
    </div>
    
    
    </>
  )
}

export default References
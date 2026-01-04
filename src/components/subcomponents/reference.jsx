import React from 'react'
import './css/reference.css'
import ref1 from '../../assets/references/ref001.png'

const Reference = ({image, name, onOpen}) => {
  return (
    <div className='reference' onClick={()=>{onOpen()}}>
      
        <div className="refpicCont">
          <img src = {image} className='refImg'/>
        </div>
        <div className="conclusion">
          <h3>{name}</h3>
        </div>
    </div>
  )
}

export default Reference
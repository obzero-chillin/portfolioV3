import React from 'react'
import './css/reference.css'
import ref1 from '../../assets/references/ref001.png'

const References = () => {
  return (
    <div className='reference'>
      
        <div className="refpicCont">
          <img src = {ref1} className='refImg'/>
        </div>
        <div className="conclusion">
          <h3>Mrs T. Kealotswe</h3>
        </div>
    </div>
  )
}

export default References
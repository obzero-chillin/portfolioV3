import React from 'react'
import './css/references.css'
import Reference from './subcomponents/reference.jsx'

const References = () => {
  return (
    <div id='references'>
        <h1>References</h1>
        <div id='referencesContainer'>
            <Reference />
            <Reference />
        </div>
    </div>
  )
}

export default References
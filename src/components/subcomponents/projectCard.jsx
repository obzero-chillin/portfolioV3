import React from 'react'
import './css/projectCard.css'

const ProjectCard = ({title, description,redirect, redirectLink}) => {
  return (
    <div className='projectCard'>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>

        </div>
        <button className='projectRedirect' onClick={()=>{window.open(redirectLink)}}>{redirect}</button>
    </div>
  )
}

export default ProjectCard  
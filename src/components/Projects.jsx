import React from 'react'
import './css/projects.css'
import ProjectCard from './subcomponents/projectCard'

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='topic'>Projects</h1>
      <div id="projectsContainer">
        <ProjectCard 
          title='Feature Flags Service'
          description="A service for managing feature flags in a microservices architecture."
          redirect="View on Github"
          redirectLink='https://github.com/obzero-chillin/Feature_flags'
        
        />
        

      </div>
      
    </div>
  )
}

export default Projects
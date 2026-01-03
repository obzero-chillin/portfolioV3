import React from 'react'
import './css/projects.css'
import ProjectCard from './subcomponents/projectCard'

const Projects = () => {
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div id="projectsContainer">
        <ProjectCard 
          title='Feature Flags Service'
          description="A service for managing feature flags in a microserices architecture"
          redirect="View on Github"
          redirectLink='https://github.com/obzero-chillin/Feature_flags'
        
        />
        <ProjectCard 
          title='Aurora Tracker'
          description="An app that predicts auroras"
          redirect="Under Construction"
          redirectLink=''
        
        />

      </div>
      
    </div>
  )
}

export default Projects
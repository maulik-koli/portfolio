import React from 'react'
import theme_pattern from '../assets/theme-pattern.svg'
import PROJECT_DATA from '../assets/project_data'

const Projects = () => {
  return (
    <div id='project' className='projects'>
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="projects-container">
        {PROJECT_DATA.map((projet) => (
            <div key={projet.id} className='proj'>
                <h3><a href={projet.source} target="_blank" >{projet.name}</a></h3>
                <img src={projet.img} alt={projet.name} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

import React from 'react'

function ProjectItem({project}) {
  return (

      <div className="project-item">
        <div className="project-image">
        <img className="project-image-item" src={project.image} alt="" />
        </div>
        <div className="project-detail">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href="" className='btn-link'>learn more</a>
        </div>
      </div>
 
  )
}

export default ProjectItem

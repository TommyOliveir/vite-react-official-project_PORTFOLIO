import React from 'react'
import projectdata from '../projectdata'
import ProjectItem from './ProjectItem'

console.log(projectdata)
function ProjectList() {
  return (
    <div>
      {projectdata.map(project => (
        <ProjectItem project={project}/>
      ))}
    </div>
  )
}

export default ProjectList

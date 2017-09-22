import React from 'react'

const ProjectCard = (props) => {
  return (
    <li>
      <div className='project-card'>
        {props.project.name}
      </div>
    </li>
  )
}

export default ProjectCard

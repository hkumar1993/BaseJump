import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const ProjectCard = (props) => {
  const projectId = props.project.id
  const userId = props.match.params.userId
  return (
    <Link to={`/${userId}/projects/${projectId}`} className='card'>
      <li className='card'>
          <div className='project-card'>
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
          </div>
      </li>
    </Link>
  )
}

export default withRouter(ProjectCard)

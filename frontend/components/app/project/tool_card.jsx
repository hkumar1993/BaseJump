import React from 'react'
import { Link } from 'react-router-dom'

class ToolCard extends React.Component {
  constructor(props) {
    super(props)
    this.toolHeader = this.toolHeader.bind(this)
    this.toolLink = this.toolLink.bind(this)
  }

  toolHeader(){
    switch (this.props.tool) {
      case 'messages':
        return 'Message Board'
      case 'todos':
        return 'To-dos'
      case 'schedule':
        return 'Schedule'
    }
  }

  toolLink(){
    switch (this.props.tool) {
      case 'messages':
        return 'messages'
      case 'todos':
        return 'todolists'
      case 'schedule':
        return 'schedule'
    }
  }

  render(){
    const id = this.props.currentUser.id
    const projectId = this.props.match.params.projectId
    const link = this.toolLink()
    return (
      <Link to={`/${id}/projects/${projectId}/${link}`}>
      <li>
          <div>
            <h2>{this.toolHeader()}</h2>
            <br />
          </div>
      </li>
    </Link>
    )
  }
}
export default ToolCard

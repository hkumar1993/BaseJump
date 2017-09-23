import React from 'react'
import { Link } from 'react-router-dom'

class ToolCard extends React.Component {
  constructor(props) {
    super(props)
    this.toolHeader = this.toolHeader.bind(this)
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

  render(){
    return (
      <Link to='/'>
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

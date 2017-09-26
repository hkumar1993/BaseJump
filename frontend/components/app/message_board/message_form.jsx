import React from 'react'
import { Link } from 'react-router-dom'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = { loading: false}
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.fetchProject(this.props.projectId)
  }

  componentWillReceiveProps(){
    setTimeout(() => this.setState({loading: false}), 500)
  }

  render(){
    if(!this.props.project || this.state.loading){
      return (<div>Loading ...</div>)
    } else {
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}`}>
              <span>{this.props.project.name}</span>
            </Link>
             >
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}/messages`}>
              <span>Message Board</span>
            </Link>
             > New Message
          </header>
          <div className='main-tool'>

          </div>
        </div>
      )
    }
  }
}

export default MessageForm

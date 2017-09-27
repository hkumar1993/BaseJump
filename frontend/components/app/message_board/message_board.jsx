import React from 'react'
import { Link } from 'react-router-dom'
import MessageBoardItem from './message_board_item'

class MessageBoard extends React.Component {
  constructor(props){
    super(props)
    this.state = { loading: false }
    console.log('PROPS!!!',props);
  }

  componentDidMount(){
    console.log('mounting props',this.props);
    this.setState({ loading: true})
    this.props.fetchCompanyUsers(this.props.currentUser.companyId).
      then(res => this.props.fetchProject(this.props.match.params.projectId)).
      then(res => this.props.fetchProjectMessages(this.props.match.params.projectId))
  }

  componentWillReceiveProps(){
    setTimeout(() => this.setState({ loading: false}), 500 )
  }

  render(){

    if(!this.props.project || this.state.loading){
      return (<div>Loading ....</div>)
    } else {
      console.log(this.props);
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}`}>
              <span>{this.props.project.name}</span>
            </Link>
            > Message Board
          </header>
          <div className='main-tool'>
            <h1>Message Board</h1>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}/messages/new`}
              className='btn btn-submit'>
              Post a message
            </Link>
            <ul className='message-board'>
              {
                this.props.messages.map(message => (<MessageBoardItem message={message}
                  fetchUser={this.props.fetchUser}
                  author={this.props.users[message.authorId]} key={message.id}
                  params={this.props.match.params}/>))
              }
            </ul>
          </div>
        </div>
      )
    }

  }
}

export default MessageBoard

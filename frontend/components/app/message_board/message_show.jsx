import React from 'react'

class MessageShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.fetchProject(this.props.projectId).
      then(this.props.fetchMessage(this.props.messageId))
  }

  componentWillReceiveProps(newProps){
    console.log('new', newProps);
    this.props.fetchUser(newProps.message.authorId).
    then(setTimeout(() => this.setState({ loading: false }), 500))
  }



  render(){
    if(this.state.loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>Message here</div>
      )
    }
  }
}

export default MessageShow

import React from 'react'
import { Link } from 'react-router-dom'
class EventShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
    this.setDate = this.setDate.bind(this)
  }

  componentDidMount(){
    this.props.fetchProject(this.props.projectId).
      then(res => this.props.fetchEvent(this.props.eventId))
  }

  componentWillReceiveProps(){
    setTimeout(() => this.setState({ loading: false }), 500)
  }

  setDate(props){
    const startDate = new Date(props.event.startDate)
    const endDate = new Date(props.event.endDate)
    this.setState({
      startDate: startDate.toDateString(),
      startTime: startDate.toTimeString(),
      endDate: endDate.toDateString(),
      endTime: endDate.toTimeString()
    })

  }

  render(){
    if(this.props.event && !this.state.loading ){
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.projectId}`}>
              <span>{this.props.project.name}</span>
            </Link>
            >
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.projectId}/events`}>
              <span>Schedule</span>
            </Link>
            > { this.props.event.title }
          </header>
          <div className='main-tool'>

            <h1>{this.props.event.title}</h1>

          </div>
        </div>
      )
    } else {
      return (
        <div>Loading....</div>
      )
    }
  }
}

export default EventShow

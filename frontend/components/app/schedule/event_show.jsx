import React from 'react'
import { Link } from 'react-router-dom'
import MiniCalendarDisplay from './mini_calendar_display'
import CommentsContainer from '../comments/comments_container'
import moment from 'moment'

class EventShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
    this.setDate = this.setDate.bind(this)
  }

  componentDidMount(){
    this.props.fetchProject(this.props.projectId).
      then(res => this.props.fetchEvent(this.props.eventId)).
      then(res => this.props.fetchUser(this.props.event.authorId))
  }

  componentWillReceiveProps(newProps){
    if(newProps.event){
      this.setDate(newProps)
    }
    setTimeout(() => this.setState({ loading: false }), 500)
  }

  setDate(props){
    const startDate = new Date(props.event.startDate)
    const endDate = new Date(props.event.endDate)
    this.setState({
      startDate,
      endDate
    })
  }

  render(){
    console.log(this.state);
    if(this.props.event && !this.state.loading ){
      console.log(this.props.event);
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
            <Link className='edit btn btn-normal'
              to={`/${this.props.currentUser.id}/projects/${this.props.projectId}/events/${this.props.event.id}/edit`}>Edit</Link>
            <div>
              <MiniCalendarDisplay startDate={new Date(this.props.event.startDate)}
                endDate={new Date(this.props.event.endDate)} />
              <h1>{this.props.event.title}</h1>
              <p>{moment(this.state.startDate).format('ddd[,] MMM Do[,] h:mm A')} - {moment(this.state.endDate).format('ddd[,] MMM Do[,] h:mm A')}</p>
            </div>
              {
                Boolean(this.props.event.description) ? (
                  <div className='event-notes'>
                    <h2>Notes:</h2>
                    <p>{this.props.event.description}</p>
                  </div>
                ) : (
                  <div></div>
                )
              }
            <div className='event-footer'>
              <p>Posted by {this.props.users[this.props.event.authorId].name}{` `}
                on {(new Date(this.props.event.createdAt)).toDateString()}</p>
            </div>
          </div>
          <CommentsContainer />
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

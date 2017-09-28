import React from 'react'
import { Link } from 'react-router-dom'
import EventIndexItem from './event_index_item'

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, events: {} }
    this.filterDates = this.filterDates.bind(this)
  }

  componentDidMount(){
    this.props.fetchUserProjects(this.props.projectId).
      then(this.props.fetchProjectEvents(this.props.projectId))
  }

  componentWillReceiveProps(newProps){
    this.filterDates(newProps)
    setTimeout( () => this.setState({loading: false}), 500)
  }

  filterDates(props){
    const events = {}
    Object.values(props.events).forEach( event => {
      if(events[event.startDate]){
        events[event.startDate] = Object.assign({}, events[event.startDate], { [event.id]: event })
      } else {
        events[event.startDate] = { [event.id]: event }
      }
    })
    this.setState({ events })
  }

  render(){
    console.log(this.props);
    console.log(this.state);
    if( this.state.events && !this.state.loading ){
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}`}>
              <span>{this.props.project.name}</span>
            </Link>
            > Schedule
          </header>
          <div className='main-tool'>
            <h1>Schedule</h1>
            <div style={{height: 300}}>

            </div>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}/events/new`}
              className='btn event btn-submit'>
              Add an event
            </Link>
            <ul className='event-list'>
              {
                Object.values(this.state.events).map(date =>
                  <EventIndexItem
                    date={Object.values(date)}
                    key={Object.keys(date)[0]}
                    currentUser={this.props.currentUser}
                    project={this.props.project} />)
              }
            </ul>
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

export default EventsIndex

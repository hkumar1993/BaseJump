import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render(){
    const sameDate = new Date(this.props.event.startDate).toDateString() === new Date(this.props.event.endDate).toDateString()
    return (
      <li className='event-item'>
        <div>
          <h1>
          {
            moment(this.props.event.startDate).format('Do MMM')
          }
          {
            sameDate ? '' : `- ${moment(this.props.event.endDate).format('Do MMM')}`
          }
          </h1>
        </div>
        <div>
          <ul className='events'>
            <li key={this.props.event.id}>
              <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}/events/${this.props.event.id}`}>
                <h1>{this.props.event.title}</h1>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    )
  }
}

export default EventIndexItem

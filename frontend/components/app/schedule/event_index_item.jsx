import React from 'react'
import { Link } from 'react-router-dom'

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }

  componentDidMount(){
  }

  render(){
    return (
      <li className='event-item'>
        <div>
          <h1>
          {
            (new Date(this.props.date[0].startDate)).
              toDateString().split(' ').slice(0,1) + ', ' +
            (new Date(this.props.date[0].startDate)).
              toDateString().split(' ').slice(1,3).join(' ')
          }
          </h1>
        </div>
        <div>
          <ul className='events'>
            {
              this.props.date.map(event => <li key={event.id}>
                <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}/events/${event.id}`}>
                  <h1>{event.title}</h1>
                </Link>
              </li>)
            }
          </ul>
        </div>
      </li>
    )
  }
}

export default EventIndexItem

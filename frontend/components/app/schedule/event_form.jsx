import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import TimePicker from 'rc-time-picker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import Loading from '../loader'
class EventForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      startDate: moment(),
      startTime: moment().hour(0).minute(0),
      endDate: moment(),
      endTime: moment().hour(0).minute(0),
      loading: true,
      event: {
        id: '',
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        author_id: this.props.currentUser.id,
        project_id: this.props.projectId
      },
      oneDay: false,
      errors: {}
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
    this.toggleOneDay = this.toggleOneDay.bind(this)
    window.state = this.state
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.fetchProject(this.props.projectId).
      then(res => {
        if(this.props.params.eventId){
          this.props.fetchEvent(this.props.params.eventId).
          then( res => {
            console.log('AJAX Result', res);
            this.setState({
              event: Object.assign({}, this.state.event,
                {
                  id: res.event.id,
                  title: res.event.title,
                  description: res.event.description,
                  author_id: res.event.authorId,
                  project_id: res.event.projectId,
                  start_date: res.event.startDate,
                  end_date: res.event.endDate,
                }
              ),
              startDate: moment(res.event.startDate),
              startTime: moment(res.event.startDate, 'HH:mm'),
              endDate: moment(res.event.endDate),
              endTime: moment(res.event.endDate),
            })
          })
        }
      }
    )
  }

  componentWillReceiveProps(newProps){
    setTimeout(() => this.setState({ loading: false }), 750)
  }

  handleDateChange(field) {
    return (date) => {
      console.log(date.format('DD/MM/YYYY'));
      this.setState({ [field]: date })
    }
  }

  handleTimeChange(field) {
    return (value) => {
      console.log(field);
      console.log(value.format('h:mm a'));
      this.setState({[field]: value})
      // console.log(value && value.format('h:mm a'));
      // console.log((moment(this.state.startDate.format('DD/MM/YYY') + ' ' + value.format('HH:mm'), 'DD/MM/YY HH:mm12')).format());
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const event = Object.assign({}, this.state.event, {
      start_date: (moment(this.state.startDate.format('DD/MM/YYY') + ' ' + this.state.startTime.format('HH:mm'), 'DD/MM/YY HH:mmZ')).format(),
      end_date: (moment(this.state.endDate.format('DD/MM/YYY') + ' ' + this.state.endTime.format('HH:mm'), 'DD/MM/YY HH:mmZ')).format(),
    })
    this.props.processEvent(event).
    then( res => this.props.history.push(`/${this.props.currentUser.id}/projects/${this.props.projectId}/events`)).
    fail( res => this.handleErrors(res.responseJSON.errors))
  }

  handleErrors(err){
    let errors = {}
    err.forEach(error => {
      const key = error.split(' ')[0].toLowerCase()
      errors = Object.assign({}, errors, {[key]: error})
    })
    this.setState({errors})
  }

  update(field) {
    return (e) => {
      e.preventDefault()
      const event = Object.assign({}, this.state.event, {[field]: e.target.value})
      this.setState({ event, errors:{} })
    }
  }

  toggleOneDay(){
    this.setState({ oneDay: !this.state.oneDay })
    if(this.state.oneDay){
      this.setState({ startTime: moment().hour(0).minute(0), endTime: moment().hour(0).minute(0) })
    } else {
      this.setState({ startTime: moment().hour(0).minute(0), endTime: moment().hour(23).minute(59) })
    }
  }

  render(){
    console.log('State', this.state);
    console.log('Moment?', this.state.startDate);
    if(this.state.loading && !this.props.project){
      return (
        <Loading />
      )
    } else {
      console.log(this.state);
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}`}>
              <span>{this.props.project.name}</span>
            </Link>
            >
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.projectId}/events`}>
              <span>Schedule</span>
            </Link>
            > { this.props.params.eventId ? 'Edit Event' : 'New Event'}

          </header>
          <div className='main-tool'>
            <form onSubmit={this.handleSubmit} className='event-form'>
              <input id='title' type='text' placeholder="What's the event? ..."
                onChange={this.update('title')} value={this.state.event.title}
                className={this.state.errors['title'] ? 'invalid-input' : ''}/>
              <span className='errors'>{this.state.errors['title'] ? this.state.errors['title'] : ''}</span>
              <div>
                <div className='check-box'>
                  <input type='checkbox' id={`checkbox-one-day`}
                    onChange={this.toggleOneDay} checked={this.state.oneDay}/>
                  <label htmlFor={`checkbox-one-day`}>
                  </label>
                </div>
                <h2>Full Day?</h2>
              </div>
              <div className={this.state.errors['end'] ? 'invalid-date' : ''}>
                <h2>Starts:</h2>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDateChange('startDate')}
                />
                <TimePicker
                  showSecond={false}
                  defaultValue={this.state.startDate}
                  onChange={this.handleTimeChange('startTime')}
                  format={'h:mm a'}
                  use12Hours
                  className={this.state.oneDay ? 'hidden' : ''}
                />
              </div>
              <div className={this.state.errors['end'] ? 'invalid-date' : ''}>
                <h2>Ends:</h2>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.handleDateChange('endDate')}
                />
                <TimePicker
                  showSecond={false}
                  defaultValue={moment().hour(0).minute(0)}
                  onChange={this.handleTimeChange('endTime')}
                  format={'h:mm a'}
                  use12Hours
                  className={this.state.oneDay ? 'hidden' : ''}
                />
              </div>
              <span className='errors'>{this.state.errors['end'] ? this.state.errors['end'] : ''}</span>
              <h2>Notes:</h2>
              <textarea placeholder='Add any notes...' onChange={this.update('description')} value={this.state.event.description}></textarea>
              <input type='submit' className='btn btn-submit'/>
            </form>
          </div>
        </div>
      )
    }
  }
}



export default EventForm

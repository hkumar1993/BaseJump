import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import TimePicker from 'rc-time-picker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

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
      errors: {}
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
                  author_id: res.event.authorId,
                  project_id: res.event.projectId,
                  start_date: res.event.startDate,
                  end_date: res.event.endDate,
                }
              ),
              startDate: moment(res.event.startDate, 'YYYY-MM-DD LT'),
              startTime: moment(res.event.startDate),
              endDate: moment(res.event.endDate),
              endTime: moment(res.event.endDate),
            })
          })
        }
      }
    )
  }

  componentWillReceiveProps(newProps){
    setTimeout(() => this.setState({ loading: false }), 500)
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
    this.props.processEvent(event)
  }

  update(field) {
    return (e) => {
      e.preventDefault()
      const event = Object.assign({}, this.state.event, {[field]: e.target.value})
      this.setState({ event })
    }
  }

  render(){
    console.log('Moment',moment('2017-09-28T23:00:00-07:00'));
    if(this.state.loading && !this.props.project){
      return (
        <div>Loading...</div>
      )
    } else {
      console.log(this.state);
      // console.log(this.state.startDate.hour());
      const startHour = this.state.startDate.hour()
      console.log(startHour);
      console.log(this.state.startDate.format('YYYY-MM-DD '));
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
            <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder="What's the event? ..." onChange={this.update('title')} value={this.state.event.title}/>
              <div>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDateChange('startDate')}
                />
                <TimePicker
                  showSecond={false}
                  defaultValue={moment().hour(0).minute(0)}
                  className="xxx"
                  onChange={this.handleTimeChange('startTime')}
                  format={'h:mm a'}
                  use12Hours
                />
              </div>
              <div>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.handleDateChange('endDate')}
                />
                <TimePicker
                  showSecond={false}
                  defaultValue={moment().hour(0).minute(0)}
                  className="xxx"
                  onChange={this.handleTimeChange('endTime')}
                  format={'h:mm a'}
                  use12Hours
                />
              </div>
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

import React from 'react'

class MiniCalendarDisplay extends React.Component {
  constructor(props) {
    super(props)

    const startDate = this.parseDate(this.props.startDate)
    const endDate = this.parseDate(this.props.endDate)
    this.state = { startDate, endDate }
    this.calDisplay = this.calDisplay.bind(this)
    this.dateDiff = this.dateDiff.bind(this)
  }

  componentDidMount(){

  }


  parseDate(date){
    const month = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    }
    const day = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    }

    const testDate = {
      month: month[date.getMonth()],
      day: day[date.getDay()],
      date: date.getDate()
    }
    return testDate
  }


  calDisplay(date){
    return (
      <div className='mini-cal'>
        <div>
          <h3>{date.month}</h3>
        </div>
        <div>
          <h1>{date.date}</h1>
          <h3>{date.day}</h3>
        </div>
      </div>
    )
  }

  dateDiff(startDate, endDate){
    // Date difference calculation source:
    // http://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html
    const one_day = 24 * 60 * 60 * 750 //miliseconds in a day
    const diff = Math.round((endDate - startDate)/one_day)
    return <h4> · · · {`${diff} ${diff === 1 ? 'day' : 'days'} total`} · · · </h4>
  }

  render(){
    const sameDate = this.props.startDate.toDateString() === this.props.endDate.toDateString()
    return (
      <div className='mini-cal-display'>
        { this.calDisplay(this.state.startDate) }
        {
          sameDate ? '' : this.dateDiff(this.props.startDate, this.props.endDate)
        }
        {
          sameDate ? '' : this.calDisplay(this.state.endDate)
        }
      </div>
    )
  }
}

export default MiniCalendarDisplay

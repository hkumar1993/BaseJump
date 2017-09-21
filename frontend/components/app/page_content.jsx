import React from 'react'

class PageContent extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  componentDidMount(){
    this.props.fetchCompany(this.props.companyId)
  }

  render(){
    return (
      <div className='main-app-content'>
        <span className='project-divider'>{this.props.company.name}</span>
      </div>
    )
  }
}

export default PageContent

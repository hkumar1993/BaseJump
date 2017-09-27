import React from 'react'
import ProjectSectionContainer from './project_section_container'

class PageContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: false}
  }

  componentDidMount(){
    this.setState({loading: true})
    this.props.fetchCurrentUser(this.props.currentUser.id).
    then(res => this.props.fetchCompany(this.props.companyId)).
    then(res => this.props.fetchUserProjects(this.props.currentUser.id))
  }

  componentWillReceiveProps(newProps){
    console.log('NEW PROPS!!');
    setTimeout(() => this.setState({loading: false}), 500)
  }

  render(){
    if (this.state.loading){
      return (
        <div>Loading....</div>
      )
    } else {
      return (
        <div className='main-app-content'>
          <ProjectSectionContainer projectType='company'/>
          <ProjectSectionContainer projectType='team'/>
          <ProjectSectionContainer projectType='project'/>
        </div>
      )
    }
  }
}

export default PageContent

import React from 'react'
import ProjectSectionContainer from './project_section_container'
import Loading from './loader'
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
    setTimeout(() => this.setState({loading: false}), 750)
  }

  render(){
    if (this.state.loading){
      return (
      <Loading />
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

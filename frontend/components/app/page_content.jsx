import React from 'react'
import ProjectSectionContainer from './project_section_container'

class PageContent extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  componentDidMount(){
    this.props.fetchCompany(this.props.companyId).
      then(this.props.fetchUserProjects(this.props.currentUser.id))
  }

  componentWillReceiveProps(newProps){
    // console.log('Content got new props !', newProps);
  }

  render(){
    return (
      <div className='main-app-content'>
        <ProjectSectionContainer projectType='company'/>
        <ProjectSectionContainer projectType='team'/>
        <ProjectSectionContainer projectType='project'/>
      </div>
    )
  }
}

export default PageContent

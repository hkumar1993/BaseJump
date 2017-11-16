import React from 'react'
import ProjectSectionContainer from './project_section_container'
import Loading from './loader'
class PageContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: false}
  }

  componentDidMount(){
    // console.log("PROPS!!!", this.props.company['name']);
    // if (!this.props.company['name']){
    //   this.setState({loading: true})
    //   this.props.fetchCurrentUser(this.props.currentUser.id).
    //     then(res => this.props.fetchCompany(this.props.companyId))
    // }

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

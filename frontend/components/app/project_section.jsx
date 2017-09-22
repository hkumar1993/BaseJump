import React from 'react'
import ProjectCard from './project_card'
import { Link } from 'react-router-dom'

class ProjectSection extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { projects }
    this.dividerText = this.dividerText.bind(this)
    this.companyLogo = this.companyLogo.bind(this)
    this.userLinks = this.userLinks.bind(this)

  }

  componentDidMount(){
    // this.props.fetchUserProjects(this.props.currentUser.id, this.props.projectType)
  }

  componentWillReceiveProps(newProps){
  }

  dividerText(){
    switch (this.props.projectType) {
      case 'company':
        return this.props.company.name
      case 'team':
        return 'Teams'
      case 'project':
        return 'Projects'
    }
  }

  companyLogo(){
    if(this.props.projectType == 'company'){
      return <li className='card logo'><img className='company-logo' src='http://cleartheairchicago.com/files/2014/06/logo-placeholder.jpg'/></li>
    }
  }

  userLinks(){
    if(this.props.projectType == 'company'){
      return (
        <li className='card'>
          <h2>My Stuff</h2>
          <ul>
            <li><Link to='/'>My Assignments 1</Link></li>
            <li><Link to='/'>My Bookmarks</Link></li>
            <li><Link to='/'>My Schedule</Link></li>
            <li><Link to='/'>My Drafts</Link></li>
            <li><Link to='/'>My Recent Activity</Link></li>

          </ul>
        </li>
      )
    }
  }

  render(){
    return (
      <section className='project-section'>
        <h2 className='project-divider'>{this.dividerText()}</h2>
        <ul className='card-holder'>
          { this.companyLogo() }
          {
            this.props.projects.map(project => {
              return (<ProjectCard project={project} key={project.id}/>)
            })
          }
          { this.userLinks() }
        </ul>
      </section>
    )
  }
}

export default ProjectSection

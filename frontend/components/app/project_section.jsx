import React from 'react'
import ProjectCard from './project_card'
import { Link } from 'react-router-dom'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'


class ProjectSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submittedProject: false,
      loading: false,
      project: {name: '', project_type: '', admin_id: ''}
    }
    this.dividerText = this.dividerText.bind(this)
    this.companyLogo = this.companyLogo.bind(this)
    this.userLinks = this.userLinks.bind(this)
    this.newProjectButton = this.newProjectButton.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

  }

  componentDidMount(){
    this.setState({loading: true})
    const project = {
      name: '',
      project_type: this.props.projectType,
      admin_id: this.props.currentUser.id
    }
    this.setState( { project })
  }

  componentWillReceiveProps(newProps){
    if(this.state.submittedProject){
      this.props.fetchUserProjects(this.props.currentUser.id).
      then(this.setState({ submittedProject: false}))
    }
    setTimeout(() => this.setState({loading: false}), 500)
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

  newProjectButton(){
    const projectType = this.props.projectType
    if(projectType !== 'company'){
      return (
        <Dropdown>
          <DropdownTrigger className='btn btn-new'>
            New
          </DropdownTrigger>
          <DropdownContent>
            <form className='new-project-dropdown'>
              <input type='text' id={projectType}
                placeholder={`${projectType[0].toUpperCase() + projectType.slice(1)} Name`}
                value={this.state.project.name} onChange={this.update}/>
              <div>
                <input type='submit' value='Save' className='btn btn-submit'
                  onClick={this.handleSubmit} />
                <input type='submit' value='Cancel' className='btn btn-cancel'
                  onClick={this.handleCancel}/>
              </div>
            </form>
          </DropdownContent>
        </Dropdown>
      )
    }
  }

  update(e) {
    $(`#${this.props.projectType}`).removeClass('invalid-input')
    e.preventDefault()
    const project = Object.assign({}, this.state.project, {name: e.target.value})
    this.setState({ project })
  }

  handleSubmit(e) {
    e.preventDefault()
    const project = {
      name: '',
      project_type: this.props.projectType,
      admin_id: this.props.currentUser.id
    }
    this.props.postProject(this.state.project).
      then(this.setState({ submittedProject: true })).
      then(this.setState({ project })).
      then(() => $('.dropdown').removeClass('dropdown--active')).
      fail(res => this.handleErrors(res.responseJSON.errors))
  }

  handleCancel(e) {
    e.preventDefault()
    const project = {
      name: '',
      project_type: this.props.projectType,
      admin_id: this.props.currentUser.id
    }
    $('.dropdown').removeClass('dropdown--active')
    this.setState({ project })
  }

  handleErrors(err) {
    $(`#${this.props.projectType}`).addClass('invalid-input')
  }

  render(){
    if(this.state.loading){
      if(this.props.projectType === 'company'){
        return (<div>Loading...</div>)
      } else {
        return (<div></div>)
      }
    } else {
      return (
        <section className='project-section'>
          {
            this.newProjectButton()
          }
          <h2 className='project-divider'>{this.dividerText()}
          </h2>

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
}
// {
//   this.props.projectType === 'company' ? null : (
//     <Link to='/' className='btn btn-new'>New</Link>
//   )
// }

export default ProjectSection

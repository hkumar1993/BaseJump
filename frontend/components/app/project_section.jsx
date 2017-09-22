import React from 'react'

class ProjectSection extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.projectType)
    // this.state = { projects }
    this.dividerText = this.dividerText.bind(this)

  }

  componentDidMount(){
    // this.props.fetchUserProjects(this.props.currentUser.id, this.props.projectType)
  }

  componentWillReceiveProps(newProps){
    console.log('Got new props !!', newProps);
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

  render(){
    return (
      <section className='project-section'>
        <h2 className='project-divider'>{this.dividerText()}</h2>
        <p>Projects Go Here</p>
        <ul>
          {
            this.props.projects.map(project => {
              return (<li>{project.name}</li>)
            })
          }
        </ul>
      </section>
    )
  }
}

export default ProjectSection

import React from 'react'
import UserList from './user_list'

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = { project: {name: '', description: '', adminId: '', teamMembers: []} }
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId).
      then(Boolean(this.props.users) ? this.props.fetchCompanyUsers(this.props.currentUser.companyId) : '')
  }

  componentWillReceiveProps(newprops){
    console.log('New Props!!', newprops);
    this.setState({project: newprops.project})

  }

  render(){
    const users = this.props.users
    return(
      <div className='project-page'>
        <h1>{this.state.project.name}</h1>
        <h2>{this.state.project.description}</h2>
        <UserList users={Object.values(users)} />
      </div>
    )
  }
}

export default ProjectShow

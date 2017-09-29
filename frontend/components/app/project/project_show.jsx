import React from 'react'
import UserList from './user_list'
import ToolCardContainer from './tool_card_container'
import { Redirect } from 'react-router-dom'
import Loading from '../loader'

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { project: {name: '', description: '', adminId: '', teamMembers: []}, loading: true, users: {} }
  }

  componentDidMount(){
    this.setState({loading: true})
    this.props.fetchUserProjects(this.props.currentUser.id).
    then(res => this.props.fetchProject(this.props.match.params.projectId)).
    then(res => this.props.fetchCompanyUsers(this.props.currentUser.companyId))
  }

  componentWillReceiveProps(newprops){
    this.setState({users: newprops.users, project: newprops.project})
    setTimeout(() => this.setState({loading: false}), 750);
  }

  render(){
    const users = this.state.users
    const tools = ['messages','todos','schedule']
    const loading = this.state.loading
    if(loading) {
      return (
        <Loading />
      )
    } else {
      if(this.props.projectIds.includes(this.props.currentProject)){
        return (
          <div className='project-page'>
            <h1>{this.state.project.name}</h1>
            <h2>{this.state.project.description}</h2>
            <UserList users={Object.values(users)} teamMembers = {this.state.project.teamMembers} />
            <ul className='tools'>
              {
                tools.map(tool => <ToolCardContainer tool={tool} key={tool}/>)
              }
            </ul>
          </div>
        )
      } else {
        return (
          <Redirect to='/' />
        )
      }
    }
  }
}

export default ProjectShow

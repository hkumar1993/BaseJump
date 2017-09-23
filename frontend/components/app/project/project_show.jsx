import React from 'react'
import UserList from './user_list'
import ToolCardContainer from './tool_card_container'
import { Redirect } from 'react-router-dom'

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = { project: {name: '', description: '', adminId: '', teamMembers: []}, loading: false, users: {} }
  }

  componentDidMount(){
    this.setState({loading: true})
    this.props.fetchProject(this.props.match.params.projectId).
      then(Boolean(this.props.users) ? this.props.fetchCompanyUsers(this.props.currentUser.companyId) : '')
  }

  componentWillReceiveProps(newprops){
    console.log('New Props!!', newprops);
    if(this.props.projectIds.includes(newprops.match.params.projectId)){
    this.setState({users: newprops.users})
    this.setState({project: newprops.project})
    setTimeout(() => this.setState({loading: false}), 500);}
  }

  render(){
    const users = this.state.users
    const tools = ['messages','todos','schedule']
    const loading = this.state.loading
    if(this.props.projectIds.includes(this.props.currentProject)){
      if(loading) {
        return (
          <div>Loading...</div>
        )
      }
      else {
        return (
          <div className='project-page'>
            <h1>{this.state.project.name}</h1>
            <h2>{this.state.project.description}</h2>
            <UserList users={Object.values(users)} />
            <ul className='tools'>
              {
                tools.map(tool => <ToolCardContainer tool={tool} key={tool}/>)
              }
            </ul>
          </div>
        )
      }
    }
    else {
      return (
        <Redirect to='/' />
      )
    }
  }
}

export default ProjectShow

import React from 'react'
import TodoListIndexItem from './todolist_index_item'
import { Link } from 'react-router-dom'
import CommentsContainer from '../comments/comments_container'

class TodoListShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
    console.log(this.props);
  }

  componentDidMount(){
    this.setState({loading: true})
    const id = this.props.match.params.listId
    this.props.fetchProject(this.props.match.params.projectId).
      then(this.props.fetchTodoList(id)).
      then(this.props.fetchProjectTodos(this.props.params.projectId))
  }

  componentWillReceiveProps(newProps){
    // console.log('new', newProps.match.params.listId);
    // console.log('current', this.props.match.params.listId);
    const id = newProps.match.params.listId;
    if(id !== this.props.match.params.listId){
      this.props.fetchProject(this.newProps.match.params.projectId).
        then(newProps.fetchTodoList(id)).
        then(this.props.fetchProjectTodos(newProps.params.projectId))
    }
    setTimeout(() => this.setState({loading: false}), 500)
  }

  render(){
    if(!Boolean(this.props.todoList) || this.state.loading){
      return (<div>Loading ...</div>)
    } else {
      console.log(this.props);
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.params.projectId}`}>
              <span>{this.props.project.name}</span>
            </Link>
             >
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.params.projectId}/todolists`}>
              <span>To-do's</span>
            </Link>
             > { this.props.todoList.title}
          </header>
          <div className='main-tool'>
            <ul className='todolists'>
              <TodoListIndexItem key={this.props.todoList.id}
                todoList={this.props.todoList} todos={this.props.todos}
                params={ this.props.params }
                toggleTodo={ this.props.toggleTodo}
                createTodo={ this.props.createTodo }
                fetchTodoListTodos={this.props.fetchTodoListTodos}
                currentUser={ this.props.currentUser } />
            </ul>
          </div>
          <CommentsContainer />
        </div>
      )
    }
  }
}

export default TodoListShow

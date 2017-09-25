import React from 'react'

class TodoListShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
    console.log(this.props);
  }

  componentDidMount(){
    this.setState({loading: true})
    const id = this.props.match.params.listId
    this.props.fetchTodoList(id).then(this.props.fetchTodoListTodos(id))
  }

  componentWillReceiveProps(newProps){
    // console.log('new', newProps.match);
    // const id = this.newProps.match.params.listId
    // if(id !== this.props.match.params.listId){
    //   this.props.fetchTodoList(id).then(this.props.fetchTodoListTodos(id))
    // }
    setTimeout(() => this.setState({loading: false}), 500)
  }

  render(){
    if(this.state.loading){
      return (<div>Loading ...</div>)
    } else {
      return (<div>Got the Todos</div>)
    }
  }
}

export default TodoListShow

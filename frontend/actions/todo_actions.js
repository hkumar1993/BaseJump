import * as APIUtil from '../util/todo_api_util'

export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const RECEIVE_TODO = 'RECEIVE_TODO'
export const RECEIVE_TODO_ERRORS = 'RECEIVE_TODO_ERRORS'

const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
})

const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
})

const receiveTodoErrors = errors => ({
  type: RECEIVE_TODO_ERRORS,
  errors
})


export const fetchProjectTodos = id => dispatch => {
  return APIUtil.fetchProjectTodos(id).
    then(res => dispatch(receiveTodos(res.todos))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}
export const fetchTodoListTodos = id => dispatch => {
  return APIUtil.fetchTodoListTodos(id).
    then(res => dispatch(receiveTodos(res.todos))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}
export const fetchTodo = id => dispatch => {
  return APIUtil.fetchTodo(id).
    then(res => dispatch(receiveTodo(res.todo))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}
export const createTodo = id => dispatch => {
  return APIUtil.createTodo(id).
    then(res => dispatch(receiveTodo(res.todo))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}
export const updateTodo = id => dispatch => {
  return APIUtil.updateTodo(id).
    then(res => dispatch(receiveTodo(res.todo))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}

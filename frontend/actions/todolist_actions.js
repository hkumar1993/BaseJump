import * as APIUtil from '../util/todolist_api_util'

export const RECEIVE_TODOLISTS = 'RECEIVE_TODOLISTS'
export const RECEIVE_TODOLIST = 'RECEIVE_TODOLIST'
export const RECEIVE_TODOLIST_ERRORS = 'RECEIVE_TODOLIST_ERRORS'

const receiveTodoLists = todoLists => ({
  type: RECEIVE_TODOLISTS,
  todoLists
})

const receiveTodoList = todoList => ({
  type: RECEIVE_TODOLIST,
  todoList
})

const receiveTodoListErrors = errors => ({
  type: RECEIVE_TODOLIST_ERRORS,
  errors
})

export const fetchProjectTodoLists = id => dispatch => {
  return APIUtil.fetchProjectTodoLists(id).
    then(res => {
      return dispatch(receiveTodoLists(res.todoLists))
    }).
    fail(res => dispatch(receiveTodoListErrors(res.responseJSON.errors)))
}
export const fetchTodoList = id => dispatch => {
  return APIUtil.fetchTodoList(id).
    then(res => dispatch(receiveTodoList(res.todoList))).
    fail(res => dispatch(receiveTodoListErrors(res.responseJSON.errors)))
}
export const createTodoList = todo_list => dispatch => {
  return APIUtil.createTodoList(todo_list).
    then(res => dispatch(receiveTodoList(res.todoList))).
    fail(res => dispatch(receiveTodoListErrors(res.responseJSON.errors)))
}
export const updateTodoList = todo_list => dispatch => {
  return APIUtil.updateTodoList(todo_list).
    then(res => dispatch(receiveTodoList(res.todoList))).
    fail(res => dispatch(receiveTodoListErrors(res.responseJSON.errors)))
}

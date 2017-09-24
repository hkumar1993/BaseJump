export const fetchProjectTodoLists = id => {
  return $.ajax({
    url: `api/projects/${id}/todolists`
  })
}

export const fetchTodoList = id => {
  return $.ajax({
    url: `api/todolists/${id}`
  })
}

export const createTodoList = todo_list => {
  return $.ajax({
    method: 'post',
    url: 'api/todolists',
    data: { todo_list }
  })
}

export const updateTodoList = todo_list => {
  return $.ajax({
    method: 'post',
    url: `api/todolists/${todo_list.id}`,
    data: { todo_list }
  })
}

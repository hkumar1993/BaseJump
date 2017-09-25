export const fetchProjectTodos = id => {
  return $.ajax({
    url: `api/projects/${id}/todos`
  })
}

export const fetchTodoListTodos = id => {
  return $.ajax({
    url: `api/todolists/${id}/todos`
  })
}

export const fetchTodo = id => {
  return $.ajax({
    url: `api/todos/${id}`
  })
}

export const createTodo = todo => {
  return $.ajax({
    method: 'post',
    url: `api/todos`,
    data: { todo }
  })
}

export const updateTodo = todo => {
  return $.ajax({
    method: 'post',
    url: `api/todos/${todo.id}`,
    data: { todo }
  })
}

export const toggleTodo = id => {
  return $.ajax({
    method: 'patch',
    url: `api/todos/${id}/toggle`
  })
}

export const fetchTodoListComments = id => {
  return $.ajax({
    url: `api/todolists/${id}/comments`
  })
}

export const fetchMessageComments = id => {
  return $.ajax({
    url: `api/messages/${id}/comments`
  })
}

export const createComment = comment => {
  return $.ajax({
    url: `api/comments`,
    method: 'post',
    data: { comment }
  })
}

export const updateComment = comment => {
  return $.ajax({
    url: `api/comments/${comment.id}`,
    method: 'patch',
    data: { comment }
  })
}

export const destroyComment = id => {
  return $.ajax({
    url: `api/comments/${id}`,
    method: 'delete',
  })
}

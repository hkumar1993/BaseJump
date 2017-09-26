export const fetchProjectMessages = id => {
  return $.ajax({
    url:`api/projects/${id}/messages`
  })
}

export const fetchMessage = id => {
  return $.ajax({
    url:`api/messages/${id}`
  })
}

export const createMessage = message => {
  return $.ajax({
    url:`api/messages`,
    method: 'post',
    data: { message }
  })
}

export const updateMessage = message => {
  return $.ajax({
    url:`api/messages/${message.id}`,
    method: 'patch',
    data: { message }
  })
}

export const deleteMessage = id => {
  return $.ajax({
    url: `api/messages/${id}`,
    method: 'delete'
  })
}

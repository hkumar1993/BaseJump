export const postUser = user => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    data: { user }
  })
}

export const patchUser = user => {
  return $.ajax({
    method: 'patch',
    url: 'api/users',
    data: { user }
  })
}

export const deleteUser = id => {
  return $.ajax({
    method: 'delete',
    url: `api/users/${id}`,
  })
}

export const postSession = user => {
  return $.ajax({
    method: 'post',
    url: 'api/session',
    data: { user }
  })
}

export const deleteSession = id => {
  return $.ajax({
    method: 'delete',
    url: `api/session`,
  })
}

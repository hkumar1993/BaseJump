export const fetchCompanyUsers = id => {
  return $.ajax({
    url: `api/projects/${id}/users`
  })
}

export const fetchUser = id => {
  return $.ajax({
    url: `api/users/${id}`
  })
}

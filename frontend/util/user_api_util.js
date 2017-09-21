export const fetchCompanyUsers = id => {
  return $.ajax({
    url: `api/companies/${id}/users`
  })
}

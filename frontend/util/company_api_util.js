export const fetchCompany = id => {
  return $.ajax({
    url: `api/companies/${id}`
  })
}

export const updateCompany = company => {
  return $.ajax({
    method: 'PATCH',
    url: `api/companies/${company.id}`,
    data: { company }
  })
}

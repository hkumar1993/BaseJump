export const fetchUserProjects = (id, projectType) => {
  let url = `api/users/${id}/projects`
  if(projectType){
    url = `api/users/${id}/projects?project_type=${projectType}`
  }
  return $.ajax({
    url
  })
}

export const fetchProject = id => {
  return $.ajax({
    url: `api/projects/${id}`
  })
}

export const postProject = project => {
  return $.ajax({
    url: `api/projects`,
    method: 'post',
    data: { project }
  })
}

export const updateProject = project => {
  return $.ajax({
    url: `api/projects/${project.id}`,
    method: 'patch',
    data: { project }
  })
}

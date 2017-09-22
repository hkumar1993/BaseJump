export const fetchUserProjects = (id, projectType) => {
  let url = `api/users/${id}/projects`
  if(projectType){
    url = `api/users/${id}/projects?project_type=${projectType}`
  }
  console.log('Calling to :', url);
  return $.ajax({
    url
  })
}

export const fetchProject = id => {
  return $.ajax({
    url: `api/projects/${id}`
  })
}

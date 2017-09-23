unless @errors
  json.current_user do
    json.partial! 'api/users/user', user: @user
    json.project_ids @user.projects.map { |project| project.id }
  end
end
json.errors @errors

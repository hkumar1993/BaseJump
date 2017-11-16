json.extract! project, :id, :name, :description, :admin_id, :project_type
json.team_members project.users.map { |user| user.id }

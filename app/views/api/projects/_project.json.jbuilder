json.extract! project, :id, :name, :description, :admin_id
json.team_members project.users.map { |user| user.id }

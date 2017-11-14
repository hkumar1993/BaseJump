if projects
    projects.each do |project|
      json.set! project.id do
        json.extract! project, :id, :name, :description, :project_type, :admin_id
        json.team_members project.users.map { |user| user.id }
      end
    end
end

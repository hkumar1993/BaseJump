if @projects
  json.projects do
    @projects.each do |project|
      json.set! project.id do
        json.extract! project, :id, :name, :description, :project_type
      end
    end
  end
end
json.errors @errors

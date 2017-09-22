if @project
  json.project do
    json.partial! 'api/projects/project', project: @project
  end
end

json.errors @errors

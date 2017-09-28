if @event
  json.event do
    json.extract! @event, :id, :title, :description, :author_id, :project_id, :start_date, :end_date
  end
end

json.errors @errors

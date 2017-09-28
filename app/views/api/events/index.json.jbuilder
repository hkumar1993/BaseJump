if @events
  json.events do
    @events.each do |event|
      json.set! event.id do
        json.extract! event, :id, :title, :description, :author_id, :project_id, :start_date, :end_date
      end
    end
  end
end

json.errors @errors

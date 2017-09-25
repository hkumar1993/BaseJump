unless @errors
  json.todo_lists do
    if @todo_lists.empty?
      json.null!
    else
      @todo_lists.each do |todo_list|
        json.set! todo_list.id do
          json.extract! todo_list, :id, :title, :description
          json.todo_ids todo_list.todos.map { |todo| todo.id }
        end
      end
    end
  end
end
json.errors @errors

if @todo_lists
  json.todo_lists do
    @todo_lists.each do |todo_list|
      json.set! todo_list.id do
        json.extract! todo_list, :id, :title, :description
        json.todo_ids todo_list.todos.map { |todo| todo.id }
      end
    end
  end
end
json.errors @errors

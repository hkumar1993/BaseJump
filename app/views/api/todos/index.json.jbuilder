unless @errors
  json.todos do
    if @todos.empty?
      json.null!
    else
      @todos.each do |todo|
        json.set! todo.id do
          json.partial! 'api/todos/todo', todo: todo
        end
      end
    end
  end
end

json.errors @errors

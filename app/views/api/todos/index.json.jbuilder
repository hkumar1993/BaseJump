if @todos
  json.todos do
    @todos.each do |todo|
      json.set! todo.id do
        json.partial! 'api/todos/todo', todo: todo
      end
    end
  end
end
json.errors @errors

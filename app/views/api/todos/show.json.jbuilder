if @todo
  json.todo do
    json.partial! 'api/todos/todo', todo: @todo
  end
end

json.errors @errors

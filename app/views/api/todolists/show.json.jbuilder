if @todo_list
  json.todo_list do
    json.partial! 'api/todolists/todo_list', todo_list: @todo_list
  end
end

json.errors @errors

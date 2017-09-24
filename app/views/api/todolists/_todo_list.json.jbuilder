json.extract! todo_list, :id, :title, :description, :author_id, :project_id
json.todo_ids todo_list.todos.map { |todo| todo.id }

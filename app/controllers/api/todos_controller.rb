class Api::TodosController < ApplicationController
  def index
    if params[:project_id]
      begin
        project = Project.find(params[:project_id])
      rescue
        @errors = ['Could not find that project']
      end

      if project
        @todos = project.todos
        render 'api/todos/index'
      else
        render 'api/todos/index', status: 404
      end
    elsif params[:todolist_id]
      begin
        todo_list = TodoList.find(params[:todolist_id])
      rescue
        @errors = ['Could not find that todo list']
      end

      if todo_list
        @todos = todo_list.todos
        render 'api/todos/index'
      else
        render 'api/todos/index', status: 404
      end
    else
      @errors = ['Could not find todos']
      render 'api/todos/index', status: 404
    end
  end

  def show
    begin
      @todo = Todo.find(params[:id])
    rescue
      @errors = ['Could not find todo']
    end

    if @todo
      render 'api/todos/show'
    else
      render 'api/todos/show', status: 404
    end

  end

  def create
    @todo = Todo.create(todo_params)
    if @todo.save
      if(params[:assignees])
        params[:assignees].each do |assignee|
          user = User.find_by_username_or_email(assignee)
          if user
            user_todo = UserTodo.create(user_id: user.id, todo_id: @todo.id)
            user_todo.save
          end
        end
      end
      render 'api/todos/show'
    else
      @errors = @todo.errors.full_messages
      render 'api/todos/show', status: 422
    end
  end

  def update
    begin
      @todo = Todo.find(params[:id])
    rescue
      @errors = ['Could not find todo']
    end

    if @todo
      if @todo.update(todo_params)
        render 'api/todos/show'
      else
        @errors = @todo.errors.full_messages
        render 'api/todos/show', status: 422
      end
    else
      render 'api/todos/show', status: 404
    end
  end

  def toggle
    begin
      @todo = Todo.find(params[:todo_id])
    rescue
      @errors = ['Could not find todo']
    end

    if @todo
      if @todo.toggle_status
        render 'api/todos/show'
      else
        @errors = @todo.errors.full_messages
        render 'api/todos/show', status: 422
      end
    else
      render 'api/todos/show', status: 404
    end
  end

  def todo_params
    params.require(:todo).permit(:title, :description, :author_id,
      :done, :todolist_id, :todo_list_id, :due_date, :assignees)
  end
end

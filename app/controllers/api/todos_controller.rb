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
    elsif params[:todo_list_id]
      begin
        todo_list = TodoList.find(params[:project_id])
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
      user_todo = UserTodo.create(user_id: params[:assignee_id], todo_id: @todo.id)
      user_todo.save
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

  def todo_params
    params.require(:todo).permit(:title, :description, :author_id,
      :done, :todo_list_id, :due_date)
  end
end

class Api::TodolistsController < ApplicationController

  def index
    begin
      project = Project.find(params[:project_id])
    rescue
      @errors = ['Project not found']
    end
    if project
      @todo_lists = project.todo_lists
      render 'api/todolists/index'
    else
      render 'api/todolists/index', status: 404
    end
  end

  def show
    begin
      @todo_list = TodoList.find(params[:id])
    rescue
      @errors = ['TodoList not found']
    end

    if @todo_list
      render 'api/todolists/show'
    else
      render 'api/todolists/show', status: 404
    end
  end

  def create
    @todo_list = TodoList.create(todo_list_params)
    if @todo_list.save
      render 'api/todolists/show'
    else
      @errors = @todo_list.errors.full_messages
      render 'api/todolists/show', status: 422
    end
  end

  def update
    begin
      @todo_list = TodoList.find(params[:id])
    rescue
      @errors = ['TodoList not found']
    end

    if @todo_list
      if @todo_list.update(todo_list_params)
        render 'api/todolists/show'
      else
        @errors = @todo_list.errors.full_messages
        render 'api/todolists/show', status: 422
      end
    else
      render 'api/todolists/show', status: 404
    end
  end

  def todo_list_params
    params.require(:todo_list).permit(:title, :description, :author_id, :project_id)
  end

end

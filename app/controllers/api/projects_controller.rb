class Api::ProjectsController < ApplicationController

  def index
    begin
      user = User.find(params[:user_id])
    rescue
      @errors = ['Cannot find that user']
    end
    if user
      @projects = user.projects
      if params[:project_type]
        @projects = @projects.reject do |project|
          project.project_type != params[:project_type]
        end
      end
      render 'api/projects/index'
    else
      render 'api/projects/index', status: 404
    end
  end

  def show
    begin
      @project = Project.find(params[:id])
    rescue
      @errors = ['Project not found']
    end

    if @project
      render 'api/projects/show'
    else
      render 'api/projects/show', status: 404
    end

  end

  def create
    @project = Project.create(project_params)
    @project.admin_id = current_user.id
    if @project.save
      @project.add_user(current_user)
      render 'api/projects/show'
    else
      @errors = @project.errors.full_messages
      render 'api/projects/show', status: 422
    end
  end

  def ensure_user_project
    if params[:id]
    user_project_ids = current_user.projects.map { |project| project.id }
      p user_project_ids
      p params[:id]
      unless user_project_ids.include?(params[:id].to_i)
        @errors = ['Unauthorized Access']
        render 'api/projects/show', status: 404
        return nil
      end
    end
  end


end

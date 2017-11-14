class Api::UsersController < ApplicationController
  def index
    begin
      @project = Project.find(params[:project_id])
    rescue
      @errors = ['Project not found']
    end

    if @project
      @employees = @project.users
      render 'api/users/index'
    else
      render 'api/users/index', status: 404
    end
  end

  def show
    begin
      @user = User.find(params[:id])
    rescue
      @errors = ['User not found']
    end

    if @user
      render 'api/users/show'
    else
      render 'api/users/show', status: 404
    end

  end

  def create
    @user = User.create(user_params)
    if @user.save
      login!(@user)
      hq = @user.business.find_company_hq
      unless hq
        project = Project.create( name: 'Company HQ',
        description: 'Company-wide announcements and stuff everyone needs to know',
        project_type: 'company', admin_id: @user.id )
        project.save
        hq = project
      end
      hq.add_user(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render 'api/users/show', status: 422
    end
  end

  def update
      begin
        @user = User.find(params[:id])
      rescue
        @errors = ['No user by that id']
      end
      if @user
        if @user.update(user_params)
          render 'api/users/show'
        else
          @errors = @user.errors.full_messages
          render 'api/users/show', status: 422
        end
      else
        render 'api/users/show', status: 404
      end
  end

  def destroy
    begin
      @user = User.find(params[:id])
    rescue
      @errors = ['No user by that id']
    end
    if @user
      User.delete(params[:id])
      @errors = ['Profile successfully deleted']
      logout!
    else
      render 'api/users/show', status: 404
    end
  end

end

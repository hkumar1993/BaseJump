class Api::UsersController < ApplicationController
  def index
    begin
      @company = Company.find(params[:company_id])
    rescue
      @errors = ['Company not found']
    end

    if @company
      @employees = @company.employees
      render 'api/users/index'
    else
      render 'api/users/index', status: 404
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

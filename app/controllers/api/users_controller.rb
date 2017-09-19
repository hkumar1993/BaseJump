class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render 'api/users/show', status: 422
    end
  end

  def update
    begin
      @user = User.find(params[:id])
      if @user.update(user_params)
        render 'api/users/show'
      else
        @errors = @user.errors.full_messages
        render 'api/users/show', status: 422
      end
    rescue
      @errors = ['No user by that id']
      render 'api/users/show', status: 422
    end
  end

  def destroy
    begin
      User.delete(params[:id])
      @errors = ['Profile successfully deleted']
      logout!
    rescue
      @errors = ['No user by that id']
      render 'api/users/show', status: 422
    end
  end

end

class Api::SessionsController < ApplicationController
  def create
    begin
      @user = User.find_by_credentials(user_params[:username], user_params[:password])
      if @user
        login!(@user)
        render 'api/users/show'
      else
        @errors = ['Username / Password Invalid']
        render 'api/users/show', status: 401
      end
    rescue
      @errors = ['User not given']
      render 'api/users/show', status: 404
    end
  end

  def destroy
    if logged_in?
      logout!
    else
      @errors = ['No running session']
      render 'api/users/show', status: 404
    end
  end

end

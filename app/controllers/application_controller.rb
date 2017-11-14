class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :current_company, :current_projects

  def current_user
    User.find_by(session_token: session[:session_token])
  end


  def logged_in?
    !!current_user
  end

  def current_company
    return session[:business] = current_user.business if logged_in?
    nil
  end

  def current_projects
    return session[:projects] = current_user.projects if logged_in?
    nil
  end

  def login!(user)
    session[:session_token] = user.session_token
    session[:business] = user.business
    session[:projects] = user.projects
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def user_params
    params.require(:user).permit(:name,
      :username,
      :email,
      :password,
      :avatar_url,
      :company,
      :job_title,
      :admin,
      :owner
      )
  end

end

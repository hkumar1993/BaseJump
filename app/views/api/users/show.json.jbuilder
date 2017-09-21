unless @errors
  json.current_user do
    json.partial! 'api/users/user', user: @user
  end
end
json.errors @errors

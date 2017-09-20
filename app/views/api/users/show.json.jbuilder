json.current_user do
  json.partial! 'api/users/user', user: @user unless @errors
end
json.errors @errors

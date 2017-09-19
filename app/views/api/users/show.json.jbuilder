json.partial! 'api/users/user', user: @user unless @errors
json.errors @errors

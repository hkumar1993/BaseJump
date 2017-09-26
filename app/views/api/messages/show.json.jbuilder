unless @errors
  json.message do
    json.partial! 'api/messages/message', message: @message
  end
end
json.errors @errors

unless @errors
  json.messages do
    @messages.each do |message|
      json.set! message.id do
        json.partial! 'api/messages/message', message: message
      end
    end
  end
end

json.errors @errors

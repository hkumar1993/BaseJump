unless @errors
  json.users do
    @employees.each do |user|
      json.set! user.id do
        json.extract! user, :id, :name, :avatar_url
      end
    end
  end
end
json.errors @errors

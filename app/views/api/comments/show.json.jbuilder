unless @errors
  json.comment do
    json.extract! @comment, :id, :body, :author_id, :parent_type, :parent_id, :created_at, :updated_at
  end
end

json.errors @errors

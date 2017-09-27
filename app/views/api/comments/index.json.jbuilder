unless @errors
  json.comments do
    @comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :parent_type, :parent_id, :created_at, :updated_at
      end
    end
  end
end

json.errors @errors

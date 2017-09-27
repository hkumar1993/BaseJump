class Api::CommentsController < ApplicationController
  def index
    if params[:message_id]
      @comments = Comment.where('parent_type = ?', 'message')
    elsif params[:todolist_id]
      @comments = Comment.where('parent_type = ?', 'todolist')
    else
      @errors = ['Could not find comments']
    end

    if @comments
      render 'api/comments/index'
    else
      render 'api/comments/index', status: 404
    end

  end

  def create
    @comment = Comment.create(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      @errors = @comment.errors.full_messages
      render 'api/comments/show', status: 422
    end
  end

  def update
    begin
      @comment = Comment.find(params[:id])
    rescue
      @errors = ['Could not find that comment']
    end

    if @comment
      if @comment.update(comment_params)
        render 'api/comments/show'
      else
        @errors = @comment.errors.full_messages
        render 'api/comments/show', status: 422
      end
    else
      render 'api/comments/show', status: 404
    end
  end

  def destroy
    begin
      @comment = Comment.find(params[:id])
    rescue
      @errors = ['Could not find that comment']
    end

    if @comment
      Comment.delete(params[:id])
    else
      render 'api/comments/show', status: 404
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :author_id, :parent_type, :parent_id)
  end
end

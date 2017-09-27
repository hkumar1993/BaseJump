class Api::MessagesController < ApplicationController
  def index
    if params[:project_id]
      @messages = Message.where("project_id = ?", params[:project_id])
      render 'api/messages/index'
    else
      @errors = ['Could not find project']
      render 'api/messages/index', status: 404
    end
  end

  def show
    begin
      @message = Message.find(params[:id])
    rescue
      @errors = ['Could not find message']
    end

    if @message
      render 'api/messages/show'
    else
      render 'api/messages/show', status: 404
    end

  end

  def create
    @message = Message.create(message_params)
    if @message.save
      render 'api/messages/show'
    else
      @errors = @message.errors.full_messages
      render 'api/messages/show', status: 422
    end
  end

  def update
    begin
      @message = Message.find(params[:id])
    rescue
      @errors = ['Message not found']
    end

    if @message
      if @message.update(message_params)
        render 'api/messages/show'
      else
        @errors = @message.errors.full_messages
        render 'api/messages/show', status: 422
      end
    else
      render 'api/messages/show', status: 404
    end
  end

  def destroy
    begin
      @message = Message.find(params[:id])
    rescue
      @errors = ['Message not found']
    end

    if @message
      Message.delete(params[:id])
    else
      render 'api/messages/show', status: 404
    end
  end

  def message_params
    params.require(:message).permit(
      :title,
      :body,
      :message_type,
      :author_id,
      :project_id
    )
  end
end

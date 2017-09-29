class Api::EventsController < ApplicationController

  def index
    if params[:project_id]
      @events = Event.where('project_id = ?', params[:project_id]).order('start_date')
    else
      @errors = ['Could not find events']
    end

    if @events
      render 'api/events/index'
    else
      render 'api/events/index', status: 404
    end

  end

  def show
    begin
      @event = Event.find(params[:id])
    rescue
      @errors = ['Could not find event']
    end
    p @event
    if @event
      render 'api/events/show'
    else
      render 'api/events/show', status: 404
    end

  end

  def create
    @event = Event.create(event_params)
    if @event.save
      render 'api/events/show'
    else
      @errors = @event.errors.full_messages
      render 'api/events/show', status: 422
    end
  end

  def update
    begin
      @event = Event.find(params[:id])
    rescue
      @errors = ['Could not find event']
    end

    if @event
      if @event.update(event_params)
        render 'api/events/show'
      else
        @errors = @event.errors.full_messages
        render 'api/events/show', status: 422
      end
    else
      render 'api/events/show', status: 404
    end
  end

  def delete
    begin
      @event = Event.find(params[:id])
    rescue
      @errors = ['Could not find event']
    end

    if @event
      Event.delete(params[:id])
    else
      render 'api/events/show', status: 404
    end
  end

  def event_params
    params.require(:event).permit(
      :title,
      :description,
      :author_id,
      :project_id,
      :start_date,
      :end_date
    )
  end

end

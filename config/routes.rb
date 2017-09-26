Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy]
    resources :users, only: [:show] do
      resources :projects, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :companies, only: [:show, :update] do
      resources :users, only: [:index]
    end
    resources :projects, only: [:show, :create, :update, :destroy] do
      resources :todolists, only: [:index]
      resources :todos, only: [:index]
      resources :messages, only: [:index]
    end

    resources :todolists, only: [:show, :create, :update, :destroy] do
      resources :todos, only: [:index]
    end

    resources :todos, only: [:show, :create, :update, :destroy] do
      patch :toggle
    end

    resources :messages, only: [:show, :create, :update, :destroy]

  end
end

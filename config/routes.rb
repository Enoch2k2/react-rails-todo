Rails.application.routes.draw do

  scope '/api' do
    get '/users', to: 'users#index', as: 'users'
    post '/users', to: 'users#create'
    get '/items', to: 'items#index', as: 'items'
    post '/items', to: 'items#create'
    post '/items/toggle/:id', to: 'items#toggle_complete'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

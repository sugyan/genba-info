Rails.application.routes.draw do
  # You can have the root of your site routed with "root"
  root 'root#index'

  # Front pages
  get 'detail/:id'   => 'genbas#show', as: :genba
  resources :idols, only: [:index, :show]
  resources :locations, only: [:show]

  get 'search' => 'search#index'
  get 'about'  => 'root#about'

  # Admin namespace
  namespace :admin, as: 'editor' do
    root 'root#index'
    resources :sources, only: [:index, :show, :update]
    get 'sources/:id/genba' => 'sources#genba', as: 'new_genba'
    resources :genbas
    resources :idols
    resources :locations
  end

  # Devise authentication
  devise_for :editors, path: 'admin', controllers: {
    sessions: 'editors/sessions',
    passwords: 'editors/passwords',
  }
end

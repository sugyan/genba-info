Rails.application.routes.draw do
  # You can have the root of your site routed with "root"
  root 'root#index'
  get  'index' => 'root#index'

  # Front pages
  get 'detail/:id'   => 'genbas#show', as: :genba
  resources :idols, only: [:index, :show] do
    get 'schedule' => 'idols#schedule'
    get 'finished' => 'idols#finished'
  end
  resources :locations, only: [:index, :show]

  resources :posts, only: [:index, :new] do
    post 'confirm', on: :collection
  end

  get 'search' => 'search#index'
  get 'about'  => 'root#about'

  # MyPage
  namespace :mypage do
    root 'root#index'
  end

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
  devise_for :users, controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks',
  }
  devise_scope :user do
    delete '/users/sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  end
  devise_for :editors, path: 'admin', controllers: {
    sessions: 'editors/sessions',
    passwords: 'editors/passwords',
  }
end

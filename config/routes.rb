Rails.application.routes.draw do
  # You can have the root of your site routed with "root"
  root 'root#index'

  # Front pages
  get 'detail/:id' => 'root#genba', as: 'genba_detail'
  get 'idol/list'  => 'root#idol_list'
  get 'idol/:id'   => 'root#idol_detail', as: 'idol_detail'

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

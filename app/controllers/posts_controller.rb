class PostsController < ApplicationController
  # devise_group :user, contains: [:user]
  before_action :authenticate_user!, only: [:new]

  def index
  end

  def new
  end
end

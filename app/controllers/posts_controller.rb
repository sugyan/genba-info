class PostsController < ApplicationController
  # devise_group :user, contains: [:user]
  before_action :authenticate_user!, only: [:new]

  def index
  end

  def new
    @post = Post.new
  end

  def confirm
    @post = Post.new(post_params)
    if @post.invalid?
      render :new
    end
  end

  private

  def post_params
    params.require(:post).permit(:poster, :title, :location, :idols, :url, :description)
  end
end

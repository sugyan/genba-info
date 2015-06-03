# coding: utf-8
class PostsController < ApplicationController
  # devise_group :user, contains: [:user]
  before_action :authenticate_user!, only: [:new, :confirm, :create]

  # GET /posts
  def index
    @posts = Post
      .includes(:user, :genba)
      .order(:created_at => :desc)
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
  end

  # GET /posts/new
  def new
    @post = Post.new(poster: current_user.name, start_at: Date.today)
  end

  # POST /posts/confirm
  def confirm
    @post = Post.new(post_params)
    if @post.invalid?
      render :new
    end
  end

  # POST /posts
  def create
    @post = Post.new(post_params.merge(user: current_user))
    @post.save!
    redirect_to posts_url, notice: "投稿されました"
  end

  private

  def post_params
    p = params.require(:post).permit(:poster, :start_at, :title, :location, { idols: [] }, :url, :description)
    p[:start_at] ||= DateTime.parse("%s %s:%s JST" % [params[:date], params[:hh], params[:mm]])
    p
  end
end

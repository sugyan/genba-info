# coding: utf-8
class Admin::PostsController < AdminController
  before_action :set_source, only: [:show, :update]

  # GET /admin/posts
  def index
    @posts = Post
      .order(:created_at => :desc)
      .page(params[:page]).per(25)
  end

  # GET /admin/posts/1
  def show
  end

  # PATCH/PUT /admin/posts/1
  def update
    @post.update(post_params)
    redirect_to editor_posts_url, notice: "更新されました"
  end

  private

  def set_source
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:genba_id)
  end
end

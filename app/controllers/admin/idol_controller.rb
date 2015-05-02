# coding: utf-8
class Admin::IdolController < AdminController
  before_action :set_idol, only: [:show, :edit, :update, :destroy]

  # GET /admin/idol
  def index
    @idols = Idol.order(id: :desc)
  end

  # GET /admin/idol/1
  def show
  end

  # GET /admin/idol/new
  def new
  end

  # GET /admin/idol/1/edit
  def edit
  end

  # POST /admin/idol
  def create
    @idol = Idol.new(idol_params)
    if @idol.save
      redirect_to editor_idol_url(@idol), notice: "登録されました"
    else
      render :new
    end
  end

  private

  def set_idol
    @idol = Idol.find(params[:id])
  end

  def idol_params
    params.require(:idol).permit(:name, :kana, :url)
  end
end
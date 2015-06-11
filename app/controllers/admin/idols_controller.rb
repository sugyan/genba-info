# coding: utf-8
class Admin::IdolsController < AdminController
  before_action :set_idol, only: [:show, :edit, :update, :destroy]

  # GET /admin/idols
  def index
    respond_to do |format|
      format.html { @idols = Idol.order(:kana).page(params[:page]).per(25) }
      format.json { @idols = Idol.order(:id => :desc) }
    end
  end

  # GET /admin/idols/1
  def show
  end

  # GET /admin/idols/new
  def new
    @idol = Idol.new
  end

  # GET /admin/idols/1/edit
  def edit
  end

  # POST /admin/idols
  def create
    @idol = Idol.new(idol_params)
    if @idol.save
      redirect_to editor_idol_url(@idol), notice: "登録されました"
    else
      render :new
    end
  end

  # PATCH/PUT /admin/idols/1
  def update
    if @idol.update(idol_params)
      redirect_to editor_idol_url(@idol), notice: "更新されました"
    else
      render :edit
    end
  end

  # DELETE /admin/idols/1
  def destroy
    @idol.destroy
    redirect_to editor_idols_url, notice: "削除されました"
  end

  private

  def set_idol
    @idol = Idol.find(params[:id])
  end

  def idol_params
    params.require(:idol).permit(:name, :kana, :url, :blog, :twitter, :cid, :nicknames => [])
  end
end

# coding: utf-8
class Admin::GenbasController < AdminController
  before_action :set_genba, only: [:show, :edit, :update, :destroy]

  # GET /admin/genbas
  def index
    @genbas = Genba.order(id: :desc)
  end

  # GET /admin/genbas/1
  def show
  end

  # GET /admin/genbas/new
  def new
    @genba = Genba.new
  end

  # GET /admin/genbas/1/edit
  def edit
  end

  # POST /admin/genbas
  def create
    @genba = Genba.new(genba_params)
    if @genba.save
      redirect_to editor_genba_url(@genba), notice: "登録されました"
    else
      render :new
    end
  end

  # PATCH/PUT /admin/genbas/1
  def update
    if @genba.update(genba_params)
      redirect_to editor_genba_url(@genba), notice: "更新されました"
    else
      render :edit
    end
  end

  # DELETE /admin/genbas/1
  def destroy
    @genba.destroy
    redirect_to editor_genbas_url, notice: "削除されました"
  end

  private

  def set_genba
    @genba = Genba.find(params[:id])
  end

  def genba_params
    p = params.require(:genba).permit(:title, :idols)
    p[:idol_ids] = p.delete(:idols).split(/,/).map{ |id| Idol.find_by_id(id).to_param }
    p
  end
end

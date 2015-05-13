# coding: utf-8
class Admin::GenbasController < AdminController
  before_action :set_genba, only: [:show, :edit, :update, :destroy]

  # GET /admin/genbas
  def index
    p = params.permit(:date)
    @genbas = Genba.all.includes(:idols, :location)
    if p[:date]
      date = Date.parse(p[:date])
      @genbas = @genbas.where("start_at >= ? AND start_at < ?", date, date + 1)
    end
    @genbas = @genbas
              .order(:start_at)
              .page(params[:page]).per(25)
  end

  # GET /admin/genbas/1
  def show
  end

  # GET /admin/genbas/new
  def new
    @genba = Genba.new
    @genba.start_at = Date.today
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
    p = params.require(:genba).permit(
      :title, :idols, :more_idols, :location_id, :start_at, :description, { urls: [] }, :status
    )
    p[:idol_ids] = p.delete(:idols).split(/,/).map{ |id| Idol.find_by_id(id).to_param }
    p[:location] = Location.find_by_id(p.delete(:location_id))
    p
  end
end

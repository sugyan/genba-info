# coding: utf-8
class Admin::SourcesController < AdminController
  before_action :set_source, only: [:show, :genba, :update]

  # GET /admin/sources
  def index
    p = params.permit(:mindate, :status)
    # 指定日付以降のもの(default: today)
    @sources = Source
      .where("start_at >= ?", p.fetch(:mindate, Date.today))
      .where(status: p.fetch(:status, "0").to_i) # status指定可(default: 0)
      .order(:start_at, :id)
      .page(params[:page]).per(25)
  end

  # GET /admin/sources/1
  def show
    @source = Source.find(params[:id])
  end

  # GET /admin/sources/1/genba
  def genba
    @genba = Genba.new(@source.genba_attributes)
    @genba.start_at = @genba.start_at.to_datetime
    render 'admin/genbas/new'
  end

  # PATCH/PUT /admin/sources/1
  def update
    @source.update({ status: 1 })
    redirect_to editor_sources_url, notice: "更新されました"
  end

  private

  def set_source
    @source = Source.find(params[:id])
  end
end

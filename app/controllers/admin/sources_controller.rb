# coding: utf-8
class Admin::SourcesController < AdminController
  before_action :set_source, only: [:show, :genba, :update]

  # GET /admin/sources
  def index
    @sources = Source.where("start_at >= ?", Date.today).order(:start_at)
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
    redirect_to editor_source_url(@source), notice: "更新されました"
  end

  private

  def set_source
    @source = Source.find(params[:id])
  end
end

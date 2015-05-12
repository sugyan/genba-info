class Admin::SourcesController < AdminController
  before_action :set_source, only: [:show, :genba]

  def index
    @sources = Source.where(status: 0).order(:start_at)
               .page(params[:page]).per(25)
  end

  def show
    @source = Source.find(params[:id])
  end

  def genba
    @genba = Genba.new(@source.genba_attributes)
    @genba.start_at = @genba.start_at.to_datetime
    render 'admin/genbas/new'
  end

  private

  def set_source
    @source = Source.find(params[:id])
  end
end

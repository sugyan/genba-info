class Admin::RootController < AdminController
  before_action :authenticate_editor!

  def index
    @sources = Source.where(status: 0).order(:start_at)
               .page(params[:page]).per(25)
  end

  def source
    @source = Source.find(params[:id])
  end
end

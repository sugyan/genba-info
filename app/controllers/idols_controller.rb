class IdolsController < ApplicationController
  def index
    respond_to do |format|
      format.json do
        @idols = Idol.order(:kana)
      end
    end
  end

  def show
    @idol = Idol.find(params[:id])
    @genbas = {
      schedule: @idol.genbas.includes(:idols, :location)
        .where(status: true)
        .where("start_at >= ?", Date.today.to_s)
        .order(:start_at)
        .page(1).per(5),
      finished: @idol.genbas.includes(:idols, :location)
        .where(status: true)
        .where("start_at < ?", Date.today.to_s)
        .order(:start_at => :desc)
        .page(1).per(5),
    }
  end

  def schedule
    p = params.permit(:page)
    @idol = Idol.find(params[:idol_id])
    @genbas = @idol.genbas.includes(:idols, :location)
      .where(status: true)
      .where("start_at >= ?", Date.today.to_s)
      .order(:start_at)
      .page(p.fetch(:page, 1)).per(20)
  end

  def finished
    p = params.permit(:page)
    @idol = Idol.find(params[:idol_id])
    @genbas = @idol.genbas.includes(:idols, :location)
      .where(status: true)
      .where("start_at < ?", Date.today.to_s)
      .order(:start_at => :desc)
      .page(p.fetch(:page, 1)).per(20)
  end
end

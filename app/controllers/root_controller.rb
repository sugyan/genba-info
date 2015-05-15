class RootController < ApplicationController
  def index
    @genbas = Genba.includes(:idols, :location)
      .where(status: true)
      .where("start_at >= ?", DateTime.now)
      .order(:start_at)
      .page(1).per(20)
  end

  def genba
    @genba = Genba.find(params[:id])
  end

  def idol_list
    @idols = Idol.order(:kana)
  end

  def idol_detail
    @idol = Idol.find(params[:id])
  end
end

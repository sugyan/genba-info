class RootController < ApplicationController
  def index
    @genbas = Genba.includes(:idols, :location)
      .where(status: true)
      .where("start_at >= ?", DateTime.now)
      .order(:start_at)
      .page(1).per(20)
  end
end

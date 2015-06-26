class RootController < ApplicationController
  def index
    p = params.permit(:since)
    @genbas = Genba.includes(:idols, :location)
      .where(status: true)
      .where("start_at >= ?", Time.at(p.fetch(:since, Time.now).to_i))
      .order(:start_at, :id)
      .page(1).per(20)
    respond_to do |format|
      format.json
      format.html
    end
  end

  def about
  end

  def google_verification
    render text: "google-site-verification: google443a1ff427ff286e.html"
  end
end

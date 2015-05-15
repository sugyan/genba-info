class GenbasController < ApplicationController
  def show
    @genba = Genba.find(params[:id])
    render_404 unless @genba.status
  end
end

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
  end
end

class IdolsController < ApplicationController
  def show
    @idol = Idol.find(params[:id])
  end
end

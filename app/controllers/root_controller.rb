class RootController < ApplicationController
  def index
  end

  def idol_list
    @idols = Idol.order(:kana)
  end

  def idol_detail
    @idol = Idol.find(params[:id])
  end
end

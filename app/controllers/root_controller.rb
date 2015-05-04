class RootController < ApplicationController
  def index
  end

  def idols
    @idols = Idol.order(:kana)
  end

  def locations
    @locations = Location.order(:name)
  end
end

class ArchivesController < ApplicationController
  def index
    today = Date.today
    redirect_to "/archives/%04d/%02d" % [today.year, today.month]
  end

  def month
    @target = Date.parse("#{params[:year]}-#{params[:month]}-01")
    @prev = @target - 1.month
    @next = @target + 1.month
    @days = Genba.select("DATE_TRUNC('day', start_at) as day, count(*)")
      .where(status: true)
      .where(start_at: @target .. @target + 1.month)
      .group("date_trunc('day', start_at)")
      .order("day")
  end

  def day
    @target = Date.parse("#{params[:year]}-#{params[:month]}-#{params[:day]}")
    @prev = @target - 1.day
    @next = @target + 1.day
    @genbas = Genba.includes(:idols, :location)
      .where(status: true)
      .where(start_at: @target .. @target + 1.day)
      .order(:start_at, :id)
  end
end

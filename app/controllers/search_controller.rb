# coding: utf-8
class SearchController < ApplicationController
  def index
    p = params.permit(:mindate, :idols, :page)
    # デフォルトで今日以降とする
    if p.fetch(:mindate, "").empty?
      redirect_to search_url p.merge(mindate: Date.today.to_s)
    end
    @genbas =
      Genba.includes(:idols, :location)
      .where(status: true)
      .where("start_at >= ?", p[:mindate])
      .order(:start_at)
      .page(p.fetch(:page, 1)).per(20)
    # idol_idによる絞り込み
    if (idol_ids = p.fetch(:idols, "").split(/,/)).length > 0
      genba_ids =
        Idol.joins(:genbas)
        .where(id: idol_ids.map{ |id| Idol.deobfuscate_id(id.to_i) })
        .select(:genba_id)
        .uniq
        .map{ |row| row.genba_id }
      @genbas = @genbas.where(id: genba_ids)
      @idols =
        Idol
        .where(id: idol_ids.map{ |id| Idol.deobfuscate_id(id.to_i) })
        .order(:kana)
        .map{ |row| row.serializable_hash(only: [:name]).merge(id: row.to_param) }
    end
  end
end

class Location < ActiveRecord::Base
  extend ObfuscateId::ClassMethods
  obfuscate_id spin: obfuscate_id_default_spin + ENV['OBFUSCATE_SPIN'].to_i

  has_many :genbas

  validates :name, :lat, :lng, presence: true

  def attributes_for_detail
    genbas = self.genbas.includes(:idols, :location)
      .where(status: true)
      .where("start_at >= ?", Date.today.to_s)
      .order(:start_at)
    self.serializable_hash(only: [:name, :address, :lat, :lng, :url]).merge(
      genbas: genbas.map{ |genba| genba.attributes_for_list },
    )
  end
end

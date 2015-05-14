# coding: utf-8
class Genba < ActiveRecord::Base
  extend ObfuscateId::ClassMethods
  obfuscate_id spin: obfuscate_id_default_spin + ENV['OBFUSCATE_SPIN'].to_i

  has_and_belongs_to_many :idols
  belongs_to :location

  serialize :urls, Array

  validate :all_urls_are_valid
  validates :idols, :location, :start_at, presence: true

  def attributes_for_list
    self.serializable_hash(only: [:title, :more_idols]).merge(
      id: self.to_param,
      start_at: I18n.l(self.start_at, format: '%-m月%-d日(%a) %H:%M'),
      location: self.location.name,
      idols: self.idols.map{ |idol| idol.serializable_hash(only: [:name, :kana]) },
      link:  Rails.application.routes.url_helpers.genba_path(self),
    )
  end

  def attributes_for_detail
    idols = self.idols.order(:kana).map do |idol|
      idol.serializable_hash(only: [:name]).merge(
        id: idol.to_param,
        link: Rails.application.routes.url_helpers.idol_path(idol),
      )
    end
    location = self.location.serializable_hash(only: [:name, :address]).merge(
      link: Rails.application.routes.url_helpers.location_path(self.location),
    )
    self.serializable_hash(only: [:title, :description, :more_idols, :urls]).merge(
      start_at: I18n.l(self.start_at, format: '%Y年%-m月%-d日(%a) %H:%M'),
      location: location,
      idols: idols,
    )
  end

  private

  def all_urls_are_valid
    self.urls.each do |url|
      if not url.match(URI::regexp(%w(http https)))
        errors.add(:urls, "#{url}を正しく入力してください。")
      end
    end
  end
end

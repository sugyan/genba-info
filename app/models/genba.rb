# coding: utf-8
class Genba < ActiveRecord::Base
  extend ObfuscateId::ClassMethods
  obfuscate_id spin: obfuscate_id_default_spin + ENV['OBFUSCATE_SPIN'].to_i

  has_and_belongs_to_many :idols, ->{ order(:kana) }
  belongs_to :location

  serialize :urls, Array

  validate :all_urls_are_valid
  validates :idols, :location, :start_at, presence: true

  def attributes_for_list
    idols = self.idols.shuffle
    more = idols.length > 10 || self.more_idols
    self.serializable_hash(only: [:title]).merge(
      id: self.to_param,
      start_at: I18n.l(self.start_at, format: '%-m月%-d日(%a) %H:%M'),
      location: self.location.name,
      idols: idols[0..9].map{ |idol| idol.serializable_hash(only: [:name]) },
      more_idols: more,
      link:  Rails.application.routes.url_helpers.genba_path(self),
      epoch: self.start_at.to_i,
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

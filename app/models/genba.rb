# coding: utf-8
class Genba < ActiveRecord::Base
  has_and_belongs_to_many :idols
  belongs_to :location

  serialize :urls, Array

  validate :all_urls_are_valid
  validates :idols, :location, :start_at, presence: true

  private

  def all_urls_are_valid
    self.urls.each do |url|
      if not url.match(URI::regexp(%w(http https)))
        errors.add(:urls, "#{url}を正しく入力してください。")
      end
    end
  end
end

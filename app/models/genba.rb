# coding: utf-8
class Genba < ActiveRecord::Base
  has_and_belongs_to_many :idols
  belongs_to :location

  validates :idols, :location, presence: true
end

# coding: utf-8
class Genba < ActiveRecord::Base
  has_and_belongs_to_many :idols

  validates :idols, presence: true
end

# coding: utf-8
class Idol < ActiveRecord::Base
  extend ObfuscateId::ClassMethods
  obfuscate_id spin: obfuscate_id_default_spin + ENV['OBFUSCATE_SPIN'].to_i

  has_and_belongs_to_many :genbas

  validates :name, :kana, presence: true
  validates :name, uniqueness: true
  validates :kana, format: { with: /\A(?:\p{Hiragana}|ー)+\z/, message: 'はひらがなで入力してください。' }
end

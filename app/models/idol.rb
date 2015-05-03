# coding: utf-8
class Idol < ActiveRecord::Base
  obfuscate_id

  validates :name, :kana, presence: true
  validates :name, uniqueness: true
  validates :kana, :format => { with: /\A(?:\p{Hiragana}|ー)+\z/, message: 'はひらがなで入力してください。' }
end

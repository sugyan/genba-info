# coding: utf-8
class User < ActiveRecord::Base
  devise :rememberable, :trackable,
         :omniauthable, :omniauth_providers => [:twitter]

  def self.from_omniauth(auth)
    u = where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.name = auth.info.name
      user.nickname = auth.info.nickname
    end
    # nickname(screen_name)は変わる可能性ある
    u.update_attributes(nickname: auth.info.nickname)
    u
  end
end

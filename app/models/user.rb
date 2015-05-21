class User < ActiveRecord::Base
  devise :rememberable, :trackable,
         :omniauthable, :omniauth_providers => [:twitter]

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    end
  end
end

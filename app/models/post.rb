class Post < ActiveRecord::Base
  belongs_to :user

  validates :title, :location, :idols, :url, :description, presence: true
end

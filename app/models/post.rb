class Post < ActiveRecord::Base
  belongs_to :user

  serialize :idols, Array

  validates :title, :location, :idols, :url, :description, presence: true
end

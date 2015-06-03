class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :genba

  serialize :idols, Array

  validates :title, :location, :idols, :url, :description, presence: true
end

class Source < ActiveRecord::Base
  enum status: { not_yet: 0, reject: 1, succeed: 2 }
end

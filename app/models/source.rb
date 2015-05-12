class Source < ActiveRecord::Base
  enum status: { not_yet: 0, reject: 1, succeed: 2 }

  def genba_attributes
    self.attributes.slice("title", "start_at", "description").merge(
      urls: [self.url],
    )
  end
end

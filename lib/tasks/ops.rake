namespace :ops do
  desc "Delete old source records"
  task delete_old_sources: :environment do
    logger = Logger.new(STDOUT)
    ActiveRecord::Base.logger = logger
    Source.where("start_at < ?", Date.today).destroy_all
  end
end

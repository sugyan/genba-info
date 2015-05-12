# coding: utf-8
namespace :sources do
  desc "Get genba-info sources"

  task calendars: :environment do
    logger = Logger.new(STDOUT)
    (1..1).each do |i|
      logger.info("page #{i}")
      uri = URI.parse('https://idol-event-calendar.herokuapp.com/events.json')
      json = Net::HTTP.get(uri)
      results = JSON.parse(json)
      results.each do |result|
        # 変換
        result[:provider] = "calendar"
        result[:keystr] = result.delete("id")
        result[:start_at] = Time.at(result["start_at"]).to_datetime
        # 重複しないよう保存
        logger.info(result)
        source = Source.where(result.slice(:provider, :keystr)).first_or_initialize
        source.update(result)
        source.save!
      end
    end
  end
end

# coding: utf-8

namespace :twitter_bot do
  desc "Twitter bot"

  task genba: :environment do
    logger = Logger.new(STDOUT)
    ActiveRecord::Base.logger = logger
    now = DateTime.now
    logger.info("now: #{ now }")
    next unless now.hour % 6 == 5 # (hourly task 前提)

    # 公開中の3時間後〜3日後の範囲内で適当に選択
    genba = Genba
      .where(:start_at => (now + 3.hours)..(now + 3))
      .where(:status => true).sample
    url = GenbaInfo::Application.routes.url_helpers.genba_url(genba, host: ENV['HOSTNAME'], protocol: ENV['PROTOCOL'])
    logger.info("genba: #{ genba.title } (#{ url })")
    # テキスト生成
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV['TWITTER_BOT_CONSUMER_KEY']
      config.consumer_secret     = ENV['TWITTER_BOT_SECRET_KEY']
      config.access_token        = ENV['TWITTER_BOT_ACCESS_TOKEN']
      config.access_token_secret = ENV['TWITTER_BOT_ACCESS_TOKEN_SECRET']
    end
    url_length = client.configuration.short_url_length_https
    text = "%s〜 %s / 会場:%s / 出演:" % [
      I18n.l(genba.start_at, format: :genba),
      genba.title,
      genba.location.name
    ]
    idols = genba.idols.shuffle
    text += idols.shift.name
    while idols.present? && text.length + idols[0].name.length + url_length + 3 < 140
      text += "," + idols.shift.name
    end
    if idols.present? or genba.more_idols
      text += ",他"
    end
    logger.info("%s (%d)" % [text, text.length + 1 + url_length])
    # Tweet
    text += " " + url
    tweet = client.update(text)
    logger.info(tweet)
  end
end

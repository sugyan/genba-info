require 'google/api_client'

namespace :sources do
  desc "Get genba-info sources"

  task calendars: :environment do
    logger = Logger.new(STDOUT)
    client = Google::APIClient.new(
      :application_name => 'idol-calendar',
      :application_version => '1.0.0'
    )
    client.authorization = Signet::OAuth2::Client.new(
      :token_credential_uri => 'https://accounts.google.com/o/oauth2/token',
      :audience => 'https://accounts.google.com/o/oauth2/token',
      :scope => 'https://www.googleapis.com/auth/calendar.readonly',
      :issuer => ENV['GOOGLE_OAUTH_CLIENT_ID'],
      :signing_key => OpenSSL::PKey::RSA.new(ENV['GOOGLE_OAUTH_PRIVATE_KEY']),
    )
    client.authorization.fetch_access_token!
    api = client.discovered_api('calendar', 'v3')

    cids = Idol.pluck(:cid).reject(&:blank?)
    while cids.any? do
      batch = Google::APIClient::BatchRequest.new

      cids.slice!(0, 50).each do |cid|
        logger.info(cid)
        batch.add(
          api_method: api.events.list,
          parameters: {
            calendarId: cid,
            orderBy: 'startTime',
            singleEvents: true,
            timeMin: Date.today.to_datetime,
            timeMax: Date.today.to_datetime >> 3,
          }
        ) do |result|
          logger.info(result)
        end
      end
      client.execute(batch)
    end
  end
end

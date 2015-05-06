# coding: utf-8
require 'test_helper'

class LocationTest < ActiveSupport::TestCase

  test "should not save without name, lat, lng" do
    assert_not Location.new().save
    assert_not Location.new(lat: 35.6891848, lng: 139.6916481).save
    assert_not Location.new(name: "hoge", lat: 35.6891848).save
    assert_not Location.new(name: "hoge", lng: 139.6916481).save
  end
end

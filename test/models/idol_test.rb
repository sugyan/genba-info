# coding: utf-8
require 'test_helper'

class IdolTest < ActiveSupport::TestCase

  test "should not save without name, kana" do
    assert_not Idol.new().save
    assert_not Idol.new(name: "hoge").save
    assert_not Idol.new(kana: "fuga").save
  end

  test "should not save duplicated name" do
    assert Idol.new(name: "hoge", kana: "ほげ").save, "Saved"
    assert Idol.new(name: "fuga", kana: "ほげ").save, "Saved"
    assert_not Idol.new(name: "hoge", kana: "ほげ").save, "Not saved"
  end

  test "should not save with not hiragana kana" do
    assert Idol.new(name: "hoge", kana: "あんじゅれーゔ").save, "Saved"
    assert_not Idol.new(name: "fuga", kana: "アンナッツ").save, "Not saved"
  end
end

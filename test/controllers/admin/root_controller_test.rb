require 'test_helper'

class Admin::RootControllerTest < ActionController::TestCase
  test "should redirect index" do
    get :index
    assert_response :redirect
  end

end

class MypageController < ApplicationController
  before_action :authenticate_user!
end

class AdminController < ApplicationController
  before_action :authenticate_editor!
end

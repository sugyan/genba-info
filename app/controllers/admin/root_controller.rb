class Admin::RootController < ApplicationController
  before_action :authenticate_editor!

  def index
  end
end

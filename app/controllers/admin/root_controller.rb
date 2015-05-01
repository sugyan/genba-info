class Admin::RootController < AdminController
  before_action :authenticate_editor!

  def index
  end
end

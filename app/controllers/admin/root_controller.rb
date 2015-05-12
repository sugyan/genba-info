class Admin::RootController < AdminController
  before_action :authenticate_editor!
end

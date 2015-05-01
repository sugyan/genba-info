class ApplicationController < ActionController::Base
  layout Proc.new { "admin" if devise_controller? }

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end

class AddStatusToGenbas < ActiveRecord::Migration
  def change
    add_column :genbas, :status, :boolean, null: false, default: false
  end
end

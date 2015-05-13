class AddColumnStatusToSources < ActiveRecord::Migration
  def change
    add_column :sources, :status, :boolean, null: false, default: false
  end
end

class RemoveColumnStatusOfSources < ActiveRecord::Migration
  def change
    remove_column :sources, :status
  end
end

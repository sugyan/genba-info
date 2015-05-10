class AddMoreColumnToGenbas < ActiveRecord::Migration
  def change
    add_column :genbas, :more_idols, :boolean, null: false, default: false
  end
end

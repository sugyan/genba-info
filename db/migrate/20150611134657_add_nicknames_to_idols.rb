class AddNicknamesToIdols < ActiveRecord::Migration
  def change
    add_column :idols, :nicknames, :text
  end
end

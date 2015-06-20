class AddIdolToSources < ActiveRecord::Migration
  def change
    add_reference :sources, :idol, index: true, foreign_key: true
  end
end

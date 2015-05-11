class AddGeohashToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :geohash, :string, null: false, default: ""
    add_index :locations, :geohash
  end
end

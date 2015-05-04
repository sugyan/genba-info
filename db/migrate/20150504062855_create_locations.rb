class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :url
      t.string :address
      t.float :lat
      t.float :lng
      t.boolean :status
      t.text :notes

      t.timestamps null: false
    end
    add_index :locations, :name, unique: true
  end
end

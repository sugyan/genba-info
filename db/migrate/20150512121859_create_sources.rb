class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.string :provider, null: false
      t.string :keystr, null: false
      t.string :title
      t.datetime :start_at
      t.string :location
      t.text :description
      t.text :url
      t.integer :status, null: false, default: 0

      t.timestamps null: false
    end

    add_index :sources, [:provider, :keystr], unique: true
  end
end

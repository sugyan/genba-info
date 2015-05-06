class CreateGenbas < ActiveRecord::Migration
  def change
    create_table :genbas do |t|
      t.string :title
      t.text :description
      t.datetime :start_at
      t.datetime :end_at
      t.text :urls

      t.timestamps null: false
    end
  end
end

class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :poster, null: false
      t.references :user, index: true, foreign_key: true
      t.datetime :start_at, null: false
      t.string :title, null: false
      t.string :location, null: false
      t.text :idols, null: false
      t.text :url, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end

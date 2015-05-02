class CreateIdols < ActiveRecord::Migration
  def change
    create_table :idols do |t|
      t.string :name
      t.string :kana
      t.string :url
      t.boolean :status
      t.text :notes

      t.timestamps null: false
    end
  end
end

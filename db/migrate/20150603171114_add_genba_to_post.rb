class AddGenbaToPost < ActiveRecord::Migration
  def change
    add_reference :posts, :genba, index: true, foreign_key: true
  end
end

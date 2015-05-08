class AddLocationToGenba < ActiveRecord::Migration
  def change
    add_reference :genbas, :location, index: true, foreign_key: true
  end
end

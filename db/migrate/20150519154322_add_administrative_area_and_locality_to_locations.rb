class AddAdministrativeAreaAndLocalityToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :administrative_area, :string
    add_column :locations, :locality, :string
  end
end

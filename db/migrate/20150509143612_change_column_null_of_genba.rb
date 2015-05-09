class ChangeColumnNullOfGenba < ActiveRecord::Migration
  def change
    change_column_null :genbas, :start_at, false
  end
end

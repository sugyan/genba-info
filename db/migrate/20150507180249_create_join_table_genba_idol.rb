class CreateJoinTableGenbaIdol < ActiveRecord::Migration
  def change
    create_join_table :genbas, :idols do |t|
      t.index [:genba_id, :idol_id]
      t.index [:idol_id, :genba_id]
    end
  end
end

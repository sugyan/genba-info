class ChangeCollationOfIdolsKana < ActiveRecord::Migration
  def up
    sql = %q(ALTER TABLE idols ALTER COLUMN kana TYPE character varying COLLATE "C")
    ActiveRecord::Base.connection.execute(sql)
  end

  def down
    sql = %q(ALTER TABLE idols ALTER COLUMN kana TYPE character varying)
    ActiveRecord::Base.connection.execute(sql)
  end
end

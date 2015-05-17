class AddColumnBlogAndTwitterAndCidToIdol < ActiveRecord::Migration
  def change
    add_column :idols, :blog, :string
    add_column :idols, :twitter, :string
    add_column :idols, :cid, :string
  end
end

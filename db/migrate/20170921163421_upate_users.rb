class UpateUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :company
    add_column :users, :company_id, :integer, null: false
  end
end

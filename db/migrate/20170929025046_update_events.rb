class UpdateEvents < ActiveRecord::Migration[5.1]
  def change
    change_column :events, :start_date, :string, null: false
    change_column :events, :end_date, :string, null: false
  end
end

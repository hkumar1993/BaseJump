class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.integer :project_id, null: false
      t.datetime :start_date , null: false
      t.datetime :end_date , null: false
      t.timestamps
    end
  end
end

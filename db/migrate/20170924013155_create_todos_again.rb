class CreateTodosAgain < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.boolean :done, null: false, default: false
      t.integer :todo_list_id, null: false
      t.datetime :due_date
      t.timestamps
    end
  end
end

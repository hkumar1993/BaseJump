class CreateTodoLists < ActiveRecord::Migration[5.1]
  def change
    create_table :todo_lists do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
  end
end

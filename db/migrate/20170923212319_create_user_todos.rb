class CreateUserTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :user_todos do |t|
      t.integer :user_id, null: false
      t.integer :todo_id, null: false
      t.timestamps
    end
  end
end

class DeleteTodos < ActiveRecord::Migration[5.1]
  def change
    drop_table :todos
  end
end

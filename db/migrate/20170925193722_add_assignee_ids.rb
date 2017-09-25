class AddAssigneeIds < ActiveRecord::Migration[5.1]
  def change
    add_column :todos, :assignee_users, :string, array: true, default: []
  end
end

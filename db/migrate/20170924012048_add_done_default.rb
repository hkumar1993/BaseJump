class AddDoneDefault < ActiveRecord::Migration[5.1]
  def change
    change_column_default :todos, :done, false
  end
end

class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description
      t.string :type, null: false
      t.integer :admin_id, null: false
      t.timestamps
    end
  end
end

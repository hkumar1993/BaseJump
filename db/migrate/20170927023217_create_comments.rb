class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.string :parent_type, null: false
      t.integer :parent_id, null: false
      t.timestamps
    end
  end
end

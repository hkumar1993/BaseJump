class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :avatar_url
      t.string :company, null: false
      t.string :job_title
      t.boolean :admin
      t.boolean :owner
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
  end
end

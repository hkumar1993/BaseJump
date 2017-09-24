# == Schema Information
#
# Table name: user_todos
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  todo_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserTodo < ApplicationRecord

  validates :user_id, :todo_id, presence: true

  belongs_to :assignee,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :assignment,
    primary_key: :id,
    foreign_key: :todo_id,
    class_name: :Todo

end

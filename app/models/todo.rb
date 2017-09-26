# == Schema Information
#
# Table name: todos
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text
#  author_id    :integer          not null
#  done         :boolean          default(FALSE), not null
#  todo_list_id :integer          not null
#  due_date     :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Todo < ApplicationRecord

  validates :title, :author_id, :todo_list_id, presence: true
  before_validation :ensure_done_status

  belongs_to :todo_list,
    primary_key: :id,
    foreign_key: :todo_list_id,
    class_name: :TodoList

  has_many :user_todos,
    primary_key: :id,
    foreign_key: :todo_id,
    class_name: :UserTodo

  has_many :assignees,
    through: :user_todos,
    source: :assignee

    def toggle_status
      self.done = !self.done
      self.save
    end

  def ensure_done_status
    if self.done.nil?
      self.done = false
    end
  end
end

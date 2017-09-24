# == Schema Information
#
# Table name: todo_lists
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  author_id   :integer          not null
#  project_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class TodoList < ApplicationRecord
  validates :title, :author_id, :project_id, presence: true

  validate :project_belongs_to_user

  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Project

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :todos,
    primary_key: :id,
    foreign_key: :todo_list_id,
    class_name: :Todo

  def project_belongs_to_user
    projects = User.find(self.author_id).projects.map { |project| project.id }
    unless projects.include?(self.project_id)
      errors.add(:project_id, 'must belong to user')
    end
  end


end

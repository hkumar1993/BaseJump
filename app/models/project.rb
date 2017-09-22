# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :string
#  project_type :string           not null
#  admin_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord
  validates :name, :project_type, :admin_id, presence: true

  has_many :project_users,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :UserProject

  has_many :users,
    through: :project_users,
    source: :user

  belongs_to :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :User,
    inverse_of: :adminned_projects

  def add_user(user)
    up = UserProject.create(user_id: user.id, project_id: self.id)
    up.save
  end

end

# == Schema Information
#
# Table name: messages
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  body         :text             not null
#  message_type :string
#  author_id    :integer          not null
#  project_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Message < ApplicationRecord

  validates :title, :body, :author_id, :project_id, presence: true

  belongs_to :project

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end

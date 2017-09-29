# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  author_id   :integer          not null
#  project_id  :integer          not null
#  start_date  :string           not null
#  end_date    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :author_id, :start_date, :end_date, presence: true
  validate :valid_date_range

  def valid_date_range
    if DateTime.parse(start_date) >= DateTime.parse(end_date)
      errors.add(:end_date, 'must be after start date')
    end
  end
end

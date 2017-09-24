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

require 'test_helper'

class TodoListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

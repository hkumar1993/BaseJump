# == Schema Information
#
# Table name: todos
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text
#  author_id    :integer          not null
#  done         :boolean          default(FALSE)
#  todo_list_id :integer          not null
#  due_date     :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

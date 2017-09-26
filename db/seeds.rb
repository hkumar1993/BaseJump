# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

john = User.create!(name: 'John Doe',
username: 'johndoe',
password: 'password',
company: "John's Dough Company",
email: 'john@doe.com')

jane = User.create!(name: 'Jane Doe',
username: 'janedoe',
password: 'password',
company: "John's Dough Company",
email: 'jane@doe.com')

hq = Project.create!(name: 'Company HQ',
description: 'Company-wide announcements and stuff everyone needs to know',
admin_id: john.id,
project_type: 'company')

hr = Project.create!(name: 'Human Resources',
  description: 'Hirings and Firings',
  admin_id: john.id,
  project_type: 'team')

finance = Project.create!(name: 'Finance',
  description: 'Provide the bread and butter',
  admin_id: john.id,
  project_type: 'team')

it = Project.create!(name: 'Create IT Department',
  description: 'Collaboration with HR and Finance to plan IT hirings',
  admin_id: john.id,
  project_type: 'project')


(1..2).each do |id|
  UserProject.create!(user_id: id, project_id: hq.id)
  UserProject.create!(user_id: id, project_id: hr.id)
  UserProject.create!(user_id: id, project_id: finance.id)
  UserProject.create!(user_id: id, project_id: it.id)
end

todo_list = TodoList.create!(title: 'The basics',
description: 'This is the companies first todo list',
author_id: 1,
project_id: 1)

Todo.create!(title: 'Create company logo',
  author_id: 1,
  todo_list_id: 1
)

Todo.create!(title: 'Create company mission and vision',
  author_id: 1,
  todo_list_id: 1
)

Todo.create!(title: 'Third todo',
  author_id: 1,
  todo_list_id: 1
)

Message.create!(
  title: 'This is our first message',
  body: '<h1>First Message!</h1>',
  message_type: 'announcement',
  author_id: 1,
  project_id: 1
)

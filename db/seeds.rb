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
email: 'john@doe.com',
avatar_url: Faker::Placeholdit.image("500x500", 'jpg', '009920', 'fff', 'J')
)

jane = User.create!(name: 'Jane Doe',
username: 'janedoe',
password: 'password',
company: "John's Dough Company",
email: 'jane@doe.com',
avatar_url: Faker::Placeholdit.image("500x500", 'jpg', 'd10000', 'fff', 'J')
)

8.times do
  name = Faker::HowIMetYourMother.character
  email = Faker::Internet.free_email(name)
  username = Faker::Internet.user_name(name, %w(. _ -))
  password = Faker::Internet.password(8)
  color = Faker::Color.hex_color
  img_url = Faker::Placeholdit.image("500x500", 'jpg', color[1..-1], 'fff', name[0])
  User.create!(name: name,
  username: username,
  password: password,
  company: "John's Dough Company",
  email: email,
  avatar_url: img_url
  )
end

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


(1..10).each do |id|
  UserProject.create!(user_id: id, project_id: hq.id)
  if id == 1
    UserProject.create!(user_id: id, project_id: hr.id)
    UserProject.create!(user_id: id, project_id: finance.id)
  elsif id % 2 == 0
    UserProject.create!(user_id: id, project_id: hr.id)
  else
    UserProject.create!(user_id: id, project_id: finance.id)
  end
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

todo_list = TodoList.create!(title: 'Get Furniture',
description: "We're going to Ikea",
author_id: 3,
project_id: 1)


Todo.create!(title: 'Buy tables',
  author_id: rand(10)+1,
  todo_list_id: 2
)

Todo.create!(title: 'Buy chairs',
  author_id: rand(10)+1,
  todo_list_id: 2
)

Todo.create!(title: 'Buy monitors',
  author_id: rand(10)+1,
  todo_list_id: 2
)

Message.create!(
  title: 'This is our first message',
  body: 'First Message!',
  message_type: 'announcement',
  author_id: 1,
  project_id: 1
)

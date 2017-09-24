# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: 'John Doe',
  username: 'johndoe',
  password: 'password',
  company: "John's Dough Company",
  email: 'john@doe.com')
user.save
# Company.create(name: "John's Dough Company")
project = Project.create(name: 'Company HQ',
  description: 'Company-wide announcements and stuff everyone needs to know',
  admin_id: user.id,
  project_type: 'company')

user_project = UserProject.create(user_id: user.id, project_id: project.id)

user = User.create(name: 'Jane Doe',
  username: 'janedoe',
  password: 'password',
  company: "John's Dough Company",
  email: 'jane@doe.com')

user.save
user_project = UserProject.create(user_id: user.id, project_id: project.id)

todo_list = TodoList.create(title: 'Our first todo list',
description: 'This is the companies first todo list',
author_id: 1,
project_id: 1)

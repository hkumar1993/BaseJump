# Company.create!([
#   {name: "john's dough company", image_url: 'https://i.pinimg.com/originals/87/ad/9d/87ad9dfcc0cb1fb7a5d26a2cd3773b5e.png'}
#   ])
#
# User.create!([
#   {name: "John Doe", username: "johndoe", email: "john@doe.com", avatar_url: "https://placehold.it/500x500.jpg/009920/fff?text=J", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Jane Doe", username: "janedoe", email: "jane@doe.com", avatar_url: "https://placehold.it/500x500.jpg/d10000/fff?text=J", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Ted Mosby", username: "ted.mosby", email: "ted.mosby@gmail.com", avatar_url: "https://placehold.it/500x500.jpg/cb1f98/fff?text=T", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Jerome Whittaker", username: "whittaker.jerome", email: "jerome_whittaker@hotmail.com", avatar_url: "https://placehold.it/500x500.jpg/90e837/fff?text=J", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Doug Martin", username: "doug-martin", email: "doug_martin@yahoo.com", avatar_url: "https://placehold.it/500x500.jpg/ddbdd7/fff?text=D", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Quinn Garvey", username: "garvey.quinn", email: "garvey_quinn@hotmail.com", avatar_url: "https://placehold.it/500x500.jpg/09391d/fff?text=Q", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Barney Stinson", username: "stinson.barney", email: "stinson.barney@hotmail.com", avatar_url: "https://placehold.it/500x500.jpg/a3e9b1/fff?text=B", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Zoey Pierson", username: "zoey.pierson", email: "pierson_zoey@yahoo.com", avatar_url: "https://placehold.it/500x500.jpg/ca8651/fff?text=Z", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "Penny Mosby", username: "mosby-penny", email: "mosby_penny@gmail.com", avatar_url: "https://placehold.it/500x500.jpg/25fefe/fff?text=P", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1},
#   {name: "George Van Smoot", username: "smoot-van-george", email: "george_smoot_van@yahoo.com", avatar_url: "https://placehold.it/500x500.jpg/f5a101/fff?text=G", job_title: nil, admin: nil, owner: nil, password: 'password', company_id: 1}
# ])
#
# Project.create!([
#   {name: "Company HQ", description: "Company-wide announcements and stuff everyone needs to know", project_type: "company", admin_id: 1},
#   {name: "Human Resources", description: "Hirings and Firings", project_type: "team", admin_id: 1},
#   {name: "Finance", description: "Provide the bread and butter", project_type: "team", admin_id: 1},
#   {name: "Create IT Department", description: "Collaboration with HR and Finance to plan IT hirings", project_type: "project", admin_id: 1}
#   ])
#
#   UserProject.create!([
#     {user_id: 1, project_id: 1},
#     {user_id: 1, project_id: 2},
#     {user_id: 1, project_id: 3},
#     {user_id: 1, project_id: 4},
#     {user_id: 2, project_id: 1},
#     {user_id: 2, project_id: 2},
#     {user_id: 2, project_id: 4},
#     {user_id: 3, project_id: 1},
#     {user_id: 3, project_id: 3},
#     {user_id: 3, project_id: 4},
#     {user_id: 4, project_id: 1},
#     {user_id: 4, project_id: 2},
#     {user_id: 4, project_id: 4},
#     {user_id: 5, project_id: 1},
#     {user_id: 5, project_id: 3},
#     {user_id: 5, project_id: 4},
#     {user_id: 6, project_id: 1},
#     {user_id: 6, project_id: 2},
#     {user_id: 6, project_id: 4},
#     {user_id: 7, project_id: 1},
#     {user_id: 7, project_id: 3},
#     {user_id: 7, project_id: 4},
#     {user_id: 8, project_id: 1},
#     {user_id: 8, project_id: 2},
#     {user_id: 8, project_id: 4},
#     {user_id: 9, project_id: 1},
#     {user_id: 9, project_id: 3},
#     {user_id: 9, project_id: 4},
#     {user_id: 10, project_id: 1},
#     {user_id: 10, project_id: 2},
#     {user_id: 10, project_id: 4}
#   ])
#
#   TodoList.create!([
#     {title: "The basics", description: "This is the companies first todo list", author_id: 1, project_id: 1},
#     {title: "Get Furniture", description: "We're going to Ikea", author_id: 3, project_id: 1},
#     {title: "Hire new Web Developers", description: "Mass hiring for company upcoming expansion", author_id: 1, project_id: 2},
#     {title: "Company Culture", description: "", author_id: 1, project_id: 2},
#     {title: "Company budgeting", description: "", author_id: 1, project_id: 3},
#     {title: "Salaries", description: "", author_id: 1, project_id: 3},
#     {title: "New Dev Positions", description: "", author_id: 1, project_id: 4},
#     {title: "Appoint CTO", description: "", author_id: 1, project_id: 4}
#   ])
#
#   Todo.create!([
#     {title: "Create company logo", description: nil, author_id: 1, done: false, todo_list_id: 1, due_date: nil},
#     {title: "Buy chairs", description: nil, author_id: 7, done: false, todo_list_id: 2, due_date: nil},
#     {title: "Get senior devs to set up interview questions", description: "", author_id: 1, done: false, todo_list_id: 3, due_date: nil},
#     {title: "Schedule interview with Harsh Kumar", description: "", author_id: 1, done: false, todo_list_id: 3, due_date: nil},
#     {title: "Create position requirements", description: "", author_id: 1, done: true, todo_list_id: 3, due_date: nil},
#     {title: "Set up current website with open positions", description: "", author_id: 1, done: true, todo_list_id: 3, due_date: nil},
#     {title: "Recruit recruiters", description: "", author_id: 1, done: true, todo_list_id: 3, due_date: nil},
#     {title: "Buy 10 bean bags", description: "", author_id: 1, done: false, todo_list_id: 4, due_date: nil},
#     {title: "Order standing desks from Ikea", description: "", author_id: 1, done: false, todo_list_id: 4, due_date: nil},
#     {title: "Get all employees gym memberships ", description: "", author_id: 1, done: false, todo_list_id: 4, due_date: nil},
#     {title: "Set up healthy food delivery for interested employees", description: "", author_id: 1, done: true, todo_list_id: 4, due_date: nil},
#     {title: "Create employee handbook", description: "", author_id: 1, done: true, todo_list_id: 4, due_date: nil},
#     {title: "Look over healthy food budget", description: "", author_id: 1, done: true, todo_list_id: 5, due_date: nil},
#     {title: "Select budget friendly Ikea standing desks", description: "", author_id: 1, done: false, todo_list_id: 5, due_date: nil},
#     {title: "Plan budget for 2018", description: "", author_id: 1, done: false, todo_list_id: 5, due_date: nil},
#     {title: "Plan budget for company expansion", description: "", author_id: 1, done: false, todo_list_id: 5, due_date: nil},
#     {title: "Look over best options for new office within 2018 budget", description: "", author_id: 1, done: false, todo_list_id: 5, due_date: nil},
#     {title: "Prepare signing bonus for new hires", description: "", author_id: 1, done: false, todo_list_id: 6, due_date: nil},
#     {title: "Pay salaries to employees", description: "", author_id: 1, done: true, todo_list_id: 6, due_date: nil},
#     {title: "Lias with HR to discuss raises", description: "", author_id: 1, done: false, todo_list_id: 6, due_date: nil},
#     {title: "Meeting with HR and Execs", description: "", author_id: 1, done: false, todo_list_id: 8, due_date: nil},
#     {title: "Lias with finance department to account for new CTO salary", description: "", author_id: 1, done: false, todo_list_id: 8, due_date: nil},
#     {title: "Set up Basejump team for new IT department", description: "", author_id: 1, done: false, todo_list_id: 7, due_date: nil},
#     {title: "Create junior positions with HR", description: "", author_id: 1, done: false, todo_list_id: 7, due_date: nil},
#     {title: "Meeting with senior developers to determine required new positions", description: "", author_id: 1, done: true, todo_list_id: 7, due_date: nil},
#     {title: "Schedule interviews with senior developers", description: "", author_id: 1, done: true, todo_list_id: 8, due_date: nil},
#     {title: "Schedule one-on-one meetings between senior devs and John", description: "", author_id: 1, done: true, todo_list_id: 8, due_date: nil},
#     {title: "Buy tables", description: nil, author_id: 2, done: true, todo_list_id: 2, due_date: nil},
#     {title: "Buy monitors", description: nil, author_id: 10, done: true, todo_list_id: 2, due_date: nil},
#     {title: "Create company mission and vision", description: nil, author_id: 1, done: true, todo_list_id: 1, due_date: nil}
#   ])
#
#   Event.create!([
#     {title: "Company Anniversary", description: "", author_id: 1, project_id: 1, start_date: "2017-10-10T00:00:00-07:00", end_date: "2017-10-10T23:59:00-07:00"},
#     {title: "Company Retreat", description: "Company trip to Disneyland !", author_id: 1, project_id: 1, start_date: "2017-09-29T00:00:00-07:00", end_date: "2017-10-02T23:59:00-07:00"},
#     {title: "Interview with Harsh", description: "", author_id: 1, project_id: 1, start_date: "2017-10-06T16:00:00-07:00", end_date: "2017-10-06T18:00:00-07:00"},
#     {title: "Last day to submit Mission and Vision Proposals", description: "", author_id: 1, project_id: 1, start_date: "2017-09-28T00:00:00-07:00", end_date: "2017-09-28T23:59:00-07:00"}
#   ])
#
#   Message.create!([
#     {title: "This is our companies first message!!", body: "Welcome to the Company HQ!", message_type: "announcement", author_id: 1, project_id: 1},
#     {title: "We are expanding !", body: "If you didn't already know, the company is expanding. This is going to be a tough time for our finance department, but I know with our efficiency we'll be able to make the expansion a huge success. \nIt is the finance departments job to set our budget for the year of 2018, the limits of our expansion rest solely in your hands.\nGood luck!", message_type: "announcement", author_id: 1, project_id: 3},
#     {title: "Company Expansion!", body: "Hey folks! \nAs we all know, the company is expanding next year. We are moving to a new office, and massively hiring new developers for the company. All that and more will be the duty of the HR department. \n\nLet's all work together to make this transition to 2018 a huge success!  ", message_type: "announcement", author_id: 1, project_id: 2},
#     {title: "Hey everyone !", body: "We are creating a new IT Department! All present developers will be promoted to senior positions to accommodate the new incoming developers. We will also be appointing a new CTO, HR department will be setting up interviews with each of you. Lets make sure we have a successful company expansion and welcome the new devs with a new and orderly IT department.  ", message_type: "announcement", author_id: 1, project_id: 4},
#     {title: "Food Delivery Service ?", body: "We're proud to announce that Finance has approved a Healthy Food Budget!\nAnyone have suggestions for what service we should use ?", message_type: "question", author_id: 6, project_id: 2},
#     {title: "Trip to IKEA !", body: "We're looking for 3 people to join us to go to IKEA to select the desks and chairs we want to purchase for the new office. Comment below if you want in!", message_type: "pitch", author_id: 6, project_id: 1},
#     {title: "Hiring friends", body: "Hey all ! We're sure everyone may have some friends interested in applying. Please DO NOT send them straight to HR, make sure to send them to the website to apply online, and use your name as a referral. ", message_type: "announcement", author_id: 2, project_id: 4}
#   ])
#
#
# Comment.create!([
#   {body: "Suggestions for the company logo are open to everyone !", author_id: 1, parent_type: "todolist", parent_id: 1},
#   {body: "I really like that developer Harsh, please schedule an interview with him ASAP", author_id: 1, parent_type: "todolist", parent_id: 3},
#   {body: "Really love the idea of getting us a healthy food delivery service", author_id: 1, parent_type: "todolist", parent_id: 4},
#   {body: "Glad the healthy food budget was approved so quickly !", author_id: 1, parent_type: "todolist", parent_id: 5},
#   {body: "Lets schedule a meeting to budget new signing bonuses", author_id: 1, parent_type: "todolist", parent_id: 6},
#   {body: "Glad we had our meeting, looking forward to working with HR to set up new positions", author_id: 1, parent_type: "todolist", parent_id: 7},
#   {body: "Looking forward to our expansion !", author_id: 3, parent_type: "message", parent_id: 2},
#   {body: "Anyone have any suggestions for a preferred food delivery service ?", author_id: 3, parent_type: "todolist", parent_id: 5},
#   {body: "Getting right on it John!", author_id: 3, parent_type: "todolist", parent_id: 6},
#   {body: "This is going to be legendary !", author_id: 3, parent_type: "message", parent_id: 1},
#   {body: "I emailed you a suggestion for the logo John", author_id: 3, parent_type: "todolist", parent_id: 1},
#   {body: "When do we want to set up our new team on Basejump ?", author_id: 3, parent_type: "todolist", parent_id: 7},
#   {body: "Looking forward to this John! Super excited!", author_id: 6, parent_type: "message", parent_id: 3},
#   {body: "Yay!! Bean Bags !", author_id: 6, parent_type: "todolist", parent_id: 4},
#   {body: "I'm In !", author_id: 7, parent_type: "message", parent_id: 6},
#   {body: "HR has a message board set up for the food delivery, check it up there :)", author_id: 7, parent_type: "todolist", parent_id: 5},
#   {body: "Have you checked out EAT Club ?", author_id: 2, parent_type: "message", parent_id: 5},
#   {body: "Really looking forward to those standing desks", author_id: 2, parent_type: "todolist", parent_id: 4},
#   {body: "Good luck to all the senior devs ! :)", author_id: 2, parent_type: "todolist", parent_id: 8},
#   {body: "I know some friends looking to apply, shall I ask them to email HR directly ?", author_id: 2, parent_type: "todolist", parent_id: 7}
# ])

# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  username        :string           not null
#  email           :string           not null
#  avatar_url      :string
#  job_title       :string
#  admin           :boolean
#  owner           :boolean
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  company_id      :integer          not null
#

class User < ApplicationRecord

  validates :name, :username, :email, :company_id, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  belongs_to :business,
    primary_key: :id,
    foreign_key: :company_id,
    class_name: :Company

  has_many :user_projects,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :UserProject

  has_many :projects,
    through: :user_projects,
    source: :project

  has_many :adminned_projects,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :Project,
    inverse_of: :admin

  has_many :authored_todo_lists,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :TodoList

  has_many :user_todos,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :UserTodo

  has_many :assignments,
    through: :user_todos,
    source: :assignment

  before_validation :ensure_session_token

  attr_reader :password, :company


  def self.find_by_credentials(login_cred, password)
    user = User.find_by(username: login_cred) || User.find_by(email: login_cred)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def company=(company)
    @company = Company.find_by_company(company) || Company.create(name: company)
    self.company_id = @company.id
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= reset_session_token!
  end

end

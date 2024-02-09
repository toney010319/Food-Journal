class User < ApplicationRecord
  has_secure_password

  validates :username, :email, :first_name, :last_name, presence: true
  validates :email, :username, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  validates :password, confirmation: true
  has_many :recipes, dependent: :destroy
  has_many :journals, dependent: :destroy
end

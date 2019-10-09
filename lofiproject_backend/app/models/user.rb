class User < ApplicationRecord
  has_secure_password
  has_and_belongs_to_many :songs

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, on: :create
end

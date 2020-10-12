class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :learns
  has_many :works

  attachment :profile_image

  validates :name, length: {in: 1..20}
  validates :introduction, length: {maximum: 300}
end

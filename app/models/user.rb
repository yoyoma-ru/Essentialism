class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :learns, dependent: :destroy
  has_many :works, dependent: :destroy
  has_many :favorites, dependent: :destroy

  attachment :profile_image

  validates :name, length: {in: 1..20}
  validates :introduction, length: {maximum: 300}
end

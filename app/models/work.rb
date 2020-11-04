class Work < ApplicationRecord
	belongs_to :user
	has_many :favorites, dependent: :destroy

	validates :genre, presence: true
	validates :writing, presence: true

	def favorited_by?(user)
		favorites.where(user_id: user.id).exists?
	end
end

class Work < ApplicationRecord
	belongs_to :user

	validates :genre, presence: true
	validates :writing, presence: true
end

class Learn < ApplicationRecord

	belongs_to :user

	validates :memo, presence: true, length: {maximum: 200}
	validates :essential_type, presence: true
	validates :chapter, presence: true
end

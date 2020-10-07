class LearnsController < ApplicationController

	before_action :authenticate_user!

	def index
	end

	def create
		@memo = Learn.new(learn_params)
		@memo.user_id = current_user
		if @memo.save
			redirect_to request.referer
		else
			redirect_to request.referer
		end
	end

	def chapter1
		@user = current_user
		@memo = Learn.new
	end

	def chapter2
	end

	def chapter3
	end

	def chapter4
	end

	def chapter5
	end

	def chapter6
	end

	def chapter7
	end

	def chapter8
	end

	def chapter9
	end

	def chapter10
	end

	def chapter11
	end

	def chapter12
	end

	def chapter13
	end

	def chapter14
	end

	def chapter15
	end

	def chapter16
	end

	def chapter17
	end

	def chapter18
	end

	def chapter19
	end

	private
	def learn_params
		params.require(:learn).permit(:essetial_type, :chapter, :memo)
end
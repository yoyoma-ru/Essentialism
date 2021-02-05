class LearnsController < ApplicationController

	before_action :authenticate_user!

	def index
	end

	def create
		@memo = Learn.new(learn_params)
		if @memo.save
			redirect_to request.referer
		else
			redirect_to learns_path
		end
	end

	def edit
		@memo = Learn.find(params[:id])
		if @memo.user == current_user
			render :edit
		else
			redirect_to learns_path
		end
	end

	def update
		@memo = Learn.find(params[:id])
		if @memo.update(learn_params)
			redirect_to request.referer
		else
			redirect_to learns_path
		end
	end

	def destroy
		@memo = Learn.find(params[:id])
		if @memo.destroy
			redirect_to request.referer
		else
			redirect_to learns_path
		end
	end

	def chapter1
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 1 ).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 1).where(essential_type: 1)
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

	def chapter20
	end

	private
	def learn_params
		params.require(:learn).permit(:user_id, :essential_type, :chapter, :memo)
	end
end
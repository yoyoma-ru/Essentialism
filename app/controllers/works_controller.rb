class WorksController < ApplicationController
	def index
		@works = Work.where(user_id: current_user.id)
	end

	def show
	end

	def create
		@writing = Work.new(work_params)
		if @writing.save
			redirect_to request.referer
		else
			redirect_to works_path
		end
	end

	def edit
	end

	def update
	end

	def destroy
		@writing = Work.find(params[:id])
		if @writing.destroy
			redirect_to request.referer
		else
			redirect_to works_path
		end
	end

	def step1_selection
		@writing = Work.new
		@non_essential_writing = Work.where(user_id: current_user.id).where(genre: 0)
		@essential_writing = Work.where(user_id: current_user.id).where(genre: 1)
	end

	def step1_noise
		@writing = Work.new
		@non_essential_writing = Work.where(user_id: current_user.id).where(genre: 2)
		@essential_writing = Work.where(user_id: current_user.id).where(genre: 3)
	end

	def step1_tradeoff
		@writing = Work.new
		@non_essential_writing = Work.where(user_id: current_user.id).where(genre: 4)
		@essential_writing = Work.where(user_id: current_user.id).where(genre: 5)
	end

	def step2
		@axis_of_life = Work.new
		@axis_of_lifes = Work.where(user_id: current_user.id).where(genre: 6)
	end

	def step3_essential_goal
		@essential_goal = Work.new
	end

	def step3_necessary_actions
		@essential_goal = Work.where(user_id: current_user.id).where(genre: 7)
		@necessary_action = Work.new
		@necessary_actions = Work.where(user_id: current_user.id).where(genre: 8)
	end

	def step4_baby_steps
		@essential_goals = Work.where(user_id: current_user.id).where(genre: 7)
		@necessary_actions = Work.where(user_id: current_user.id).where(genre: 8)
		@baby_step = Work.new
		@baby_steps = Work.where(user_id: current_user.id).where(genre: 9)
	end

	def step4_habits
		@baby_steps = Work.where(user_id: current_user.id).where(genre: 9)
		@habit = Work.new
		@habits = Work.where(user_id: current_user.id).where(genre: 10)
	end

	def user_works
		@essential_goals = Work.where(genre: 7)
	end

	private
	def work_params
		params.require(:work).permit(:user_id, :genre, :writing)
	end
end
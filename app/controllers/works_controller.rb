class WorksController < ApplicationController
	def index
		@works = Work.where(user_id: current_user.id)
	end

	def create
		@work = Work.new(work_params)
		if @work.save
			respond_to do |format|
				format.html{redirect_to request.referer}
				format.json
			end
		else
			redirect_to works_path
		end
	end

	def edit
	end

	def update
		@writing = Work.find(params[:id])
		if @writing.update(work_params)
			redirect_to request.referer
		else
			redirect_to works_path
		end
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
		@most_axis_of_life = Work.find_by(user_id: current_user.id, genre: 7)
	end

	def step3_essential_goal
		@most_axis_of_life = Work.find_by(user_id: current_user.id, genre: 7)
		@essential_goal = Work.new
		@my_essential_goal = Work.find_by(user_id: current_user.id, genre: 8)
	end

	def step3_necessary_actions
		@my_essential_goal = Work.find_by(user_id: current_user.id, genre: 8)
		@necessary_action = Work.new
		@necessary_actions = Work.where(user_id: current_user.id).where(genre: 9)
	end

	def step4_baby_steps
		@my_essential_goal = Work.find_by(user_id: current_user.id, genre: 8)
		@necessary_actions = Work.where(user_id: current_user.id).where(genre: 9)
		@baby_step = Work.new
		@baby_steps = Work.where(user_id: current_user.id).where(genre: 10)
	end

	def step4_habits
		@baby_steps = Work.where(user_id: current_user.id).where(genre: 10)
		@habit = Work.new
		@habits = Work.where(user_id: current_user.id).where(genre: 11)
	end

	def user_works
		@essential_goals = Work.where(genre: 8).order(created_at: :desc).limit(10)
		@all_ranks = Work.find(Favorite.group(:work_id).order('count(work_id) desc').limit(10).pluck(:work_id))
	end

	def user_work
		@user = Work.find(params[:id])
		@work = Work.where(user_id: @user.user.id)
		@essential_goal = @work.find_by(genre: 8)
	end

	private
	def work_params
		params.require(:work).permit(:user_id, :genre, :writing)
	end
end
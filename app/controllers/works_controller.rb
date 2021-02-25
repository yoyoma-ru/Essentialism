class WorksController < ApplicationController

	before_action :authenticate_user!, only: [:create, :update, :destroy]
	protect_from_forgery

	def index
		@works = Work.where(user_id: current_user.id)
	end

	def create
		@work = Work.new(work_params)
		if @work.save
			respond_to do |format|
				format.html {redirect_to request.referer}
				format.json {render json: {
										id: @work.id,
										writing: @work.writing,
										user_id: @work.user_id,
										genre: @work.genre
									}
							}
			end
		else
			redirect_to works_path
		end
	end

	def update
		@work = Work.find(params[:id])
		if @work.update(work_params)
			respond_to do |format|
				format.html { redirect_to request.referer }
				format.json { render json: {
										id: @work.id,
										writing: @work.writing
									}
				}
			end
		else
			redirect_to works_path
		end
	end

	def destroy
		@work = Work.find(params[:id])
		if @work.destroy
			respond_to do |format|
				format.html { redirect_to request.referer }
				format.json { render json: { id: params[:id] } }
			end
		else
			redirect_to works_path
		end
	end


	def step1
		@axis_of_life = Work.new
		@axis_of_lifes = Work.where(user_id: current_user.id).where(genre: 1)
		@most_axis_of_life = Work.find_by(user_id: current_user.id, genre: 2)
	end

	def step2
		@most_axis_of_life = Work.find_by(user_id: current_user.id, genre: 2)
		@essential_goal = Work.new
		@essential_goals = Work.where(user_id: current_user.id).where(genre: 3)
		@my_essential_goal = Work.find_by(user_id: current_user.id, genre: 4)
	end

	def step3
		@my_essential_goal = Work.find_by(user_id: current_user.id, genre: 4)
		@necessary_action = Work.new
		@necessary_actions = Work.where(user_id: current_user.id).where(genre: 5)
	end

	def step4
		@my_essential_goal = Work.find_by(user_id: current_user.id, genre: 4)
		@necessary_actions = Work.where(user_id: current_user.id).where(genre: 5)
		@baby_step = Work.new
		@baby_steps = Work.where(user_id: current_user.id).where(genre: 6)
	end

	def step5
		@baby_steps = Work.where(user_id: current_user.id).where(genre: 6)
		@habit = Work.new
		@habits = Work.where(user_id: current_user.id).where(genre: 7)
		@habit_todo = Work.find_by(user_id: current_user.id, genre: 8)
	end

	def user_works
		@essential_goals = Work.where(genre: 8).order(created_at: :desc).limit(10)
		@all_ranks = Work.find(Favorite.group(:work_id).order('count(work_id) desc').limit(10).pluck(:work_id))
	end

	def user_work
		@user = Work.find(params[:id])
		@work = Work.where(user_id: @user.user.id)
		@essential_goal = @work.find_by(genre: 4)
	end

	private
	def work_params
		params.require(:work).permit(:user_id, :genre, :writing)
	end
end
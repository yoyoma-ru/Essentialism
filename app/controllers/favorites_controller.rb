class FavoritesController < ApplicationController

	def index
		@favorites = Favorite.where(user_id: current_user.id)
	end

	def create
		essential_goal = Work.find(params[:work_id])
		favorite = current_user.favorites.new(work_id: essential_goal.id)
		favorite.save
		redirect_to request.referer
	end

	def destroy
		essential_goal = Work.find(params[:work_id])
		favorite = current_user.favorites.find_by(work_id: essential_goal.id)
		favorite.destroy
		redirect_to request.referer
	end
end

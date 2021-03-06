class UsersController < ApplicationController

  before_action :authenticate_user!


  def show
  	@user = User.find(params[:id])
    @essential_goal = Work.find_by(user_id: @user.id, genre: 4)
  end

  def edit
  	@user = User.find(params[:id])
  	if @user == current_user
  		render :edit
  	else
  		redirect_to user_path(@user)
  	end
  end

  def update
  	@user = User.find(params[:id])
  	if @user.update(user_params)
  		redirect_to user_path(@user)
  	else
  		render :edit
  	end
  end

  def destroy
  	@user = User.find(params[:id])
  	if @user.destroy
  		redirect_to root_path
  	else
  		render :show
  	end
  end

  private
  def user_params
  	params.require(:user).permit(:name, :profile_image, :introduction)
  end
end

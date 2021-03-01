class LearnsController < ApplicationController

	before_action :authenticate_user!, only: [:create, :update, :destroy]
	protect_from_forgery

	def index
	end

	def create
		@memo = Learn.new(learn_params)
		if @memo.save
			respond_to do |format|
				format.html { redirect_to request.referer }
				format.json { render json: {memo: @memo.memo,
											id: @memo.id,
											chapter: @memo.chapter,
											essential_type: @memo.essential_type,
											user_id: @memo.user_id
											}
							}
			end
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
		if @memo.update!(learn_params)
			respond_to do |format|
				format.html { redirect_to request.referer }
				format.json { render json: {memo: @memo.memo,
											id: @memo.id
											}
							}
			end
		else
			redirect_to learns_path
		end
	end

	def destroy
		@memo = Learn.find(params[:id])
		if @memo.destroy
			respond_to do |format|
				format.html { redirect_to request.referer }
				format.json { render json: {id: params[:id]} }
			end
		else
			redirect_to learns_path
		end
	end

	def chapter1
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 1).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 1).where(essential_type: 1)
	end

	def chapter2
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 2).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 2).where(essential_type: 1)
	end

	def chapter3
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 3).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 3).where(essential_type: 1)
	end

	def chapter4
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 4).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 4).where(essential_type: 1)
	end

	def chapter5
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 5).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 5).where(essential_type: 1)
	end

	def chapter6
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 6).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 6).where(essential_type: 1)
	end

	def chapter7
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 7).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 7).where(essential_type: 1)
	end

	def chapter8
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 8).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 8).where(essential_type: 1)
	end

	def chapter9
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 9).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 9).where(essential_type: 1)
	end

	def chapter10
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 10).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 10).where(essential_type: 1)
	end

	def chapter11
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 11).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 11).where(essential_type: 1)
	end

	def chapter12
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 12).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 12).where(essential_type: 1)
	end

	def chapter13
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 13).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 13).where(essential_type: 1)
	end

	def chapter14
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 14).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 14).where(essential_type: 1)
	end

	def chapter15
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 15).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 15).where(essential_type: 1)
	end

	def chapter16
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 16).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 16).where(essential_type: 1)
	end

	def chapter17
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 17).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 17).where(essential_type: 1)
	end

	def chapter18
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 18).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 18).where(essential_type: 1)
	end

	def chapter19
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 19).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 19).where(essential_type: 1)
	end

	def chapter20
		@user = current_user
		@memo = Learn.new
		@non_essential_memos = Learn.where(user_id: current_user).where(chapter: 20).where(essential_type: 0)
		@essential_memos = Learn.where(user_id: current_user).where(chapter: 20).where(essential_type: 1)
	end

	private
	def learn_params
		params.require(:learn).permit(:user_id, :essential_type, :chapter, :memo)
	end
end
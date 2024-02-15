module Api
  class UsersController < ApplicationController
    def create
      user = User.new(user_params)
      if user.save
        render json: { user: user }, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    def show
      user = User.find(params[:id])
      render json: user
    end

    private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation, :first_name, :last_name)
    end
  end
end

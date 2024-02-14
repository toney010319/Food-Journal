module Api
  class UsersController < ApplicationController
    before_action :set_user, only: %i[update]

    def create
      user = User.new(user_params)
      if user.save
        render json: { user: user }, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      if user_params[:password].blank?
        # Remove password-related attributes if password is blank
        user_params.delete(:password)
        user_params.delete(:password_confirmation)
      end

      if @user.update(user_params)
        render json: { user: @user, status: :saved }
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation, :first_name, :last_name)
    end

    def set_user
      @user = User.find(params[:id])
    end
  end
end

module Api
  class SessionsController < ApplicationController
    def create
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
        token = encode_token(user_id: user.id)
        render json: { user: user, token: token }
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end

    private

    def encode_token(payload)
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end
  end
end
require 'rails_helper'

RSpec.describe Api::UsersController, type: :request do
  describe "POST #create" do
    context "with valid parameters" do
      let(:valid_params) do
        {
          "user": {
            "username": "test_user",
            "email": "test@example.com",
            "password": "password123",
            "first_name": "Test",
            "last_name": "User"
          }
        }
      end

      it "creates a new user" do
        expect {
          post '/api/signup', params: valid_params
        }.to change(User, :count).by(1)
      end

      it "returns a JSON response with the created user" do
        post '/api/signup', params: valid_params
        expect(response).to have_http_status(:created)
        expect(response.content_type).to include('application/json')
        expect(JSON.parse(response.body)["user"]["username"]).to eq("test_user")
      end
    end

    context "with invalid parameters" do
      let(:invalid_params) do
        {
          user: {
            username: "",
            email: "invalid_email",
            password: "short",
            first_name: "Test",
            last_name: "User"
          }
        }
      end

      it "does not create a new user" do
        expect {
          post '/api/signup', params: invalid_params
        }.not_to change(User, :count)
      end

      it "returns a JSON response with errors" do
        post '/api/signup', params: invalid_params
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to include('application/json')
        debugger
        expect(JSON.parse(response.body)["errors"]).to include("Username can't be blank", "Email is invalid")
      end
    end
  end
end

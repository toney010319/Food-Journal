require 'rails_helper'

RSpec.describe Api::SessionsController, type: :request do
  describe "POST #create" do
    context "with valid credentials" do
      let(:user) { FactoryBot.create(:user, username: "test_user", password: "password123") }
      it "returns a JSON response with user details and token" do
        post '/api/login', params: {  username: user.username, password: user.password  }
        expect(response).to have_http_status(:success)
        expect(response.content_type).to include('application/json')
        parsed_response = JSON.parse(response.body)
        expect(parsed_response).to have_key('user')
        expect(parsed_response).to have_key('token')
      end
    end

    context "with invalid credentials" do
      it "returns a JSON response with error message and status unauthorized" do
        post '/api/login', params: { username: "invalid_username", password: "invalid_password" }
        expect(response).to have_http_status(:unauthorized)
        expect(response.content_type).to include('application/json')
        expect(JSON.parse(response.body)).to include('error')
      end
    end
  end
end

require 'rails_helper'

RSpec.describe "NutritionDetails", type: :request do
  describe "GET /index" do
   context "with valid parameters" do
      let(:valid_params) do
        {
          "ingredients": ["1 large apple"]
        }
      end

      it "returns a JSON response with the nutrition details" do
        post '/api/nutritiondetails', params: valid_params
        expect(response).to have_http_status(:success)
        expect(response.content_type).to include('application/json')
        expect(JSON.parse(response.body)).to include("calories")
      end
    end
  end
end

require 'httparty'
require 'json'
require 'dotenv/load'
class NutritionDetailsApi
    include HTTParty
    base_uri "https://api.edamam.com/api/nutrition-details"

    def initialize (ingredients)
        @ingredients = Array(ingredients)
    end

    def get_nutrition_details
        request_body = {
            "title": "Recipe",
            "ingr": @ingredients
        }.to_json
        puts "Request Body: #{request_body}"
        puts "App ID: #{ENV['NUTRITION_APP_ID']}"
        puts "App Key: #{ENV['NUTRITION_APP_KEY']}"
        puts "Request URL: #{self.class.base_uri}"
        response = self.class.post("#{self.class.base_uri}?app_id=#{ENV['NUTRITION_APP_ID']}&app_key=#{ENV['NUTRITION_APP_KEY']}", {
            
            body: request_body,
            headers: {
                'Content-Type' => 'application/json'
            }
        })
        parse_response(response)
    end
    private
    def parse_response(response)
        if response.success?
          JSON.parse(response.body)
        else
          { error: "API request failed with status code #{response.code}" }
        end
    end
end


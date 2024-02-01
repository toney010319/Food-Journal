require 'httparty'
require 'dotenv/load'

class RecipeSearchApi
  include HTTParty
  base_uri 'https://api.edamam.com/api/recipes/v2'

  def initialize(query)
    @query = query
  end

  def search_recipes
    request_params = {
      q: @query,
      app_id: '6db53d7f',
      app_key: 'd3478e085a126d32037e0437a6897813',
      type: "any",
    }

    response = self.class.get("#{self.class.base_uri}?", query: request_params)

    parse_response(response)
  end

  private

  def parse_response(response)
    if response.success?
      JSON.parse(response.body)
    else
      puts "fullerrorresponse: #{response.body}"
      { error: "API request failed with status code #{response.code}" }
    end
  end
end


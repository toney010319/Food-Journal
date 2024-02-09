require 'httparty'
require 'dotenv/load'

class CustomQueryStringNormalizer
  def self.call(query)
    query.map do |key, value|
      if value.is_a?(Array)
        value.map { |v| "#{key}=#{v}" }.join('&')
      else
        "#{key}=#{value}"
      end
    end.join('&')
  end
end

class RecipeSearchApi
  include HTTParty
  base_uri 'https://api.edamam.com/api/recipes/v2'
  query_string_normalizer CustomQueryStringNormalizer

  def initialize(query: nil, uri: nil)
    @query = query
    @uri = uri
  end

 
  def search_recipes
    return unless @query
    request_params = {
      type: "any",
      q: @query,
      app_id: '6db53d7f',
      app_key: 'd3478e085a126d32037e0437a6897813',
      field: "uri",
    }

    response = self.class.get("#{self.class.base_uri}?", query: request_params)

    parse_response(response)
  end

   
  def search_recipes_by_uri
    return unless @uri
    request_params = {
      type: "public",
      uri: @uri,
      app_id: '6db53d7f',
      app_key: 'd3478e085a126d32037e0437a6897813',
      field: ["label","ingredientLines","image","healthLabels","dietLabels","digest","yield","totalNutrients"],
       
    }
    response = self.class.get("#{self.class.base_uri}/by-uri?", query: request_params)
    
    parse_response(response, @uri)
  end

  private

  def parse_response(response,uri = nil)
    if response.success?
      body = JSON.parse(response.body)
      body['uri'] = uri if uri
      body
    else
      puts "fullerrorresponse: #{response.body}"
      { error: "API request failed with status code #{response.code}" }
    end
  end
end


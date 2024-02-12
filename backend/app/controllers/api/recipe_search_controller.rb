module Api
    class RecipeSearchController < ApplicationController
        def recipe_search
            query = params[:query]

            if query.blank?
                render json: { error: 'Recipe is required' }, status: :bad_request
            return
            end

            search_recipes_api = RecipeSearchApi.new(query: params[:query])
            result = search_recipes_api.search_recipes

            if result.key?('error')
                render json: {error: result[:error]}, status: :bad_request
            else
                render json: result
            end
        end

        def recipe_search_by_uri
            uri = params[:uri]
            if uri.blank?
                render json: { error: 'URI is required' }, status: :bad_request
                return
            end

            search_recipes_api = RecipeSearchApi.new(uri: params[:uri])
            result = search_recipes_api.search_recipes_by_uri
            puts "Result: #{result}"
            if result.key?('error')
                render json: {error: result[:error]}, status: :bad_request
            else
                recipe_data = result['hits'][0]['recipe']
                recipe_record = Recipe.find_by(uri: uri)
                database_recipe_id = recipe_record&.id 
                filtered_data = {
                    id: database_recipe_id,
                    ingredientLines: recipe_data['ingredientLines'],
                    label: recipe_data['label'],
                    image: recipe_data['image'],
                    healthLabels: recipe_data['healthLabels'],
                    dietLabels: recipe_data['dietLabels'],
                    digest: recipe_data['digest'],
                    yield: recipe_data['yield'],
                    totalNutrients: recipe_data['totalNutrients'],
                    uri: recipe_data['uri'],
                    calories: recipe_data['calories']
                     
                                }
                 render json: filtered_data
            end
        end

       
    end
end
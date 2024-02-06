module Api
    class RecipeSearchController < ApplicationController
        def recipesearch
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

        def recipeSearchByUri
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
                filtered_data = {
                    ingredientLines: recipe_data['ingredientLines'],
                    label: recipe_data['label'],
                    image: recipe_data['image']
                                }
                 render json: filtered_data
            end
        end

       
    end
end
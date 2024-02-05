module Api
    class RecipeSearchController < ApplicationController
        def recipesearch
            query = params[:query]

            if query.blank?
                render json: { error: 'Recipe is required' }, status: :bad_request
            return
            end

            search_recipes_api = RecipeSearchApi.new(query)
            result = search_recipes_api.search_recipes

            if result.key?('error')
                render json: {error: result[:error]}, status: :bad_request
            else
                render json: result
            end
        end

        def saverecipe
            
        end


    end
end
module Api
    class NutritionDetailsController < ApplicationController
        def nutrition
            ingredients = params[:ingredients]
           
            if ingredients.blank?
                render json: { error: 'Ingredients are required' }, status: :bad_request
            return
            end

            nutrition_details_api = NutritionDetailsApi.new(ingredients)
            result = nutrition_details_api.get_nutrition_details
            
            if result.key?('error')
                render json: {error: result[:error]}, status: :bad_request
            else
                render json: result
            end
        end
    end
end

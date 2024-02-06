module Api
    class RecipeController < ApplicationController
        def index
            user = User.find(params[:user_id])
            recipes = user.recipes
            render json: recipes
          end

        def create
            recipe = Recipe.new(recipe_params)
            user = User.find(params[:user_id])
            if recipe.save
                render json: recipe
            else
                render json: {error: 'Unable to create recipe.'}, status: 400
            end
        end

        def destroy
            recipe = Recipe.find(params[:id])
            user = User.find(params[:user_id])
            if recipe.destroy
                render json: recipe
            else
                render json: {error: 'Unable to delete recipe.'}, status: 400
            end
        end

        
      
    
        private
        def recipe_params
            params.permit(:uri)
        end
    end
end
 
module Api
    class RecipeController < ApplicationController
        def index
            recipes = Recipe.all
            render json: recipes
        end

   

        def create
            recipe = Recipe.new(recipe_params)
            if recipe.save
                render json: recipe
            else
                render json: {error: 'Unable to create recipe.'}, status: 400
            end
        end

        def destroy
            recipe = Recipe.find(params[:id])
            if recipe.destroy
                render json: recipe
            else
                render json: {error: 'Unable to delete recipe.'}, status: 400
            end
        end

        def show
        recipe = Recipe.find(params[:id])
        render json: recipe
        end
    
        private
        def recipe_params
            params.require(:recipe).permit(:label, :ingredientsLines,:images)
        end
    end
end

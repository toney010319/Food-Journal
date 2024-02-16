module Api
    class HomepageController < ApplicationController
        def index
            @user = User.find(params[:id])


            render json: {
                nutrition_info: get_nutrition_info,
                recent_recipes: get_recent_recipes_images,
                journal_today: get_journal_today
            }, status: :ok
        end
    private
        def get_nutrition_info        
            start_date = 7.days.ago.beginning_of_day
            end_date = Time.zone.now.end_of_day
            label_totals = Hash.new(0)

            entries_last_7_days = @user.journals.where(created_at: start_date..end_date)
            
            nutrition_array = entries_last_7_days.map { |journal| { nutrition_details: journal.digestlabel } }

            nutrition_array.each do |entry|
                entry[:nutrition_details].each do |nutrition_detail|
                    label_totals[nutrition_detail["label"]] += nutrition_detail["total"]
                end
            end
            label_totals
        end

        def get_journal_today
            start_of_day = Time.zone.now.beginning_of_day
            end_of_day = Time.zone.now.end_of_day
            entries_created_today = @user.journals.where(created_at: start_of_day..end_of_day)

            labels = entries_created_today.map { |entry| entry.label }

        end

        def get_recent_recipes_images
            recent_recipes = @user.recipes.order(created_at: :desc).limit(5)
            urls = []
            recent_recipes.each do |recipe|
                search_recipes_api = RecipeSearchApi.new(uri: recipe[:uri])
                result = search_recipes_api.search_recipes_by_uri
                urls << result['hits'][0]['recipe']['image']
            end
            urls
        end
    end
end
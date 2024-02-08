module Api
class JournalsController < ApplicationController
  before_action :set_user, only: [:create]
   
  def create
    journal = Journal.new(journal_params)
      
    if journal.save
      render json: journal, status: :ok
    else
      render json: {error: 'Unable to Add meal'}, status: :unprocessable_entity
    end
  end


  private
  
    def journal_params
      params.permit(:image,:label, :yield,  :mealtype, :user_id,digestlabel: [:total, :label], healthlabel: [], ingredientlines: [])
    end

    private
    def set_user
      @user = User.find(params[:id])
    end
end
end
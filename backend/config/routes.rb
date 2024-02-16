Rails.application.routes.draw do
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  
  namespace :api do
    post 'login', to: 'sessions#create'
    post 'logout', to: 'sessions#destroy'
    post 'signup', to: 'users#create'
    patch 'update/:id', to: 'users#update'
    get 'homepage/:id', to: 'homepage#index'
    get 'recipebyuri', to: 'recipe_search#recipe_search_by_uri'
    post 'nutritiondetails', to: 'nutrition_details#nutrition'
    get 'recipe', to: 'recipe_search#recipe_search'
    resources :users do
      resources :recipe
      resources :journals
      
    end
  end

 
end

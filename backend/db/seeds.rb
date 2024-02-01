# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

leche_flan_ingredients = ["2 eggs", "1 cup of flour", "1/2 cups of oil", "1 tbsp of sugar"]
Recipe.create(name: "Leche Flan", ingredients: leche_flan_ingredients)

lumpia_ingredients = [
"1 tablespoon vegetable oil",
"1 pound ground pork",
"1/2 cup chopped onion",
"2 cloves garlic crushed",
"1/2 cup minced carrots",
"1/2 cup chopped green onions",
"1/2 cup thinly sliced green cabbage",
"2 tablespoons chopped fresh cilantro",
"1 teaspoon ground black pepper",
"1 teaspoon salt",
"1 teaspoon garlic powder",
"1 teaspoon soy sauce",
"30 lumpia wrappers",
"2 cups vegetable oil"
]

Recipe.create(name: "Lumpia", ingredients: lumpia_ingredients)
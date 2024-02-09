# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create(
  username: 'test1',
  email: 'test1@example.com',
  password: 'password1234',
  first_name: 'John',
  last_name: 'Doe'
)
User.create(
  username: 'q',
  email: 'q@q',
  password: '123456',
  first_name: 'q',
  last_name: 'q'
)
User.create(
  username: 'w',
  email: 'w@w',
  password: '123456',
  first_name: 'w',
  last_name: 'w'
)



 
  Recipe.create(
    user_id: 2,
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_cf665dda5068a07d26ccfda829588474",
  )
  Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_bccf9937e9c083be501c92457d50f1a3",
  )
  Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_25e09f000a24fe43ad27dc14bbd1cb04",
  )
  Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_2d6b5f79a65af3fa9a5722ebbd9b442a",
  )
  Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8e4738b9d9d8b9c20f6d5f2c5788cdd9",
  )
  Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_6860eeeec08bc9f98774b0808b7c9d56",
  )
  Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
  )
  Recipe.create(
    user_id: 2,
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_6860eeeec08bc9f98774b0808b7c9d56",
    )
  
    Recipe.create(
    user_id: 2,
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8dd9425e2e8be1a0aac13a41b4b7ed5c",
     )
    Recipe.create(
    user_id: 2,
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c342e720f679cd098295ccb7baad655b",
    )
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
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
  )


Recipe.create(
  user_id: 1,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
)
Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
)
Recipe.create(
  user_id: 2,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
)
Recipe.create(
  user_id: 3,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
)
Recipe.create(
  user_id: 3,
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
)
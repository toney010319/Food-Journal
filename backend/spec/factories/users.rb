FactoryBot.define do
  factory :user do
    username { "test_user" }
    email {"test_user@test.com"}
    password { "password123" }
    first_name { "Test" }
    last_name { "User" }
  end
end
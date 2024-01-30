require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      user = User.new(email: "test@example.com", username: "test", password: "password", first_name: "Test", last_name: "User")
      expect(user).to be_valid
    end

    it "is not valid without an email" do
      user = User.new(email: nil, username: "test", password: "password", first_name: "Test", last_name: "User")
      expect(user).not_to be_valid
    end

    it "is not valid without an username" do
      user = User.new(email: "test@example.com", username: nil, password: "password", first_name: "Test", last_name: "User")
      expect(user).not_to be_valid
    end

    it "is not valid without a password" do
      user = User.new(email: "test@example.com", username: "test", password: nil, first_name: "Test", last_name: "User")
      expect(user).not_to be_valid
    end
    
    it "is not valid without first name" do
      user = User.new(email: "test@example.com", username: "test", password: "password", first_name: nil, last_name: "User")
      expect(user).not_to be_valid
    end
    
    it "is not valid without last name" do
      user = User.new(email: "test@example.com", username: "test", password: "password", first_name: "Test", last_name: nil)
      expect(user).not_to be_valid
    end
  end
end

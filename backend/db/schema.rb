# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_08_181645) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authorized_tokens", force: :cascade do |t|
    t.string "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["token"], name: "index_authorized_tokens_on_token"
  end

  create_table "journals", force: :cascade do |t|
    t.string "label"
    t.string "ingredientlines", default: [], array: true
    t.string "image"
    t.jsonb "digestlabel", default: [], array: true
    t.string "healthlabel", default: [], array: true
    t.string "yield"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "mealtype"
    t.index ["user_id"], name: "index_journals_on_user_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "label"
    t.text "ingredientsLines", default: [], array: true
    t.text "images", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "journals", "users"
end

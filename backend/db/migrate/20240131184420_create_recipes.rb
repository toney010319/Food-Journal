class CreateRecipes < ActiveRecord::Migration[7.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :ingredients, array: true, default: []

      t.timestamps
    end
  end
end

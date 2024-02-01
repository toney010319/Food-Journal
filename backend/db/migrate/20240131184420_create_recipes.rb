class CreateRecipes < ActiveRecord::Migration[7.1]
  def change
    create_table :recipes do |t|
      t.string :label
      t.text :ingredientsLines, array: true, default: []
      t.text :images, array: true, default: []
      t.timestamps
    end
  end
end

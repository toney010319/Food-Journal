class AddColumnNameToJournals < ActiveRecord::Migration[7.1]
  def change
    add_column :journals, :mealtype, :string
  end
end

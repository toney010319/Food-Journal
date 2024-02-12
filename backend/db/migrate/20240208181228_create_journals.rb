class CreateJournals < ActiveRecord::Migration[7.1]
  def change
    create_table :journals do |t|
        t.string :uri
        t.string :label
        t.string :ingredientlines, array: true, default: []
        t.string :image
        t.jsonb :digestlabel, array:true, default: []
        t.string :healthlabel,array: true, default: []
        t.string :dietlabel,array: true, default: []
        t.string :yield
        t.references :user, null: false, foreign_key: true
        t.timestamps
     
    end
  end
end

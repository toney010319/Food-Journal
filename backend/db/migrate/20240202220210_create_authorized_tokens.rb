class CreateAuthorizedTokens < ActiveRecord::Migration[7.1]
  def change
    create_table :authorized_tokens do |t|
      t.string :token

      t.timestamps
    end
    add_index :authorized_tokens, :token
  end
end

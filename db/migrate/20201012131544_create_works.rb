class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.integer :user_id, null: false
      t.integer :genre, null: false
      t.text :writing, null: false

      t.timestamps
    end
  end
end

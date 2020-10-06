class CreateLearns < ActiveRecord::Migration[5.2]
  def change
    create_table :learns do |t|
      t.integer :user_id
      t.integer :essential_type, null: false
      t.integer :chapter, null: false
      t.text :memo, null: false

      t.timestamps
    end
  end
end

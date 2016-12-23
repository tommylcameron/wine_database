class CreateBeveragesTable < ActiveRecord::Migration
  def change
    create_table :beverages do |t|
      t.string :name, null:false
      t.string :type
      t.float :alcohol_percentage
      t.integer :vintage_year
      t.integer :rating
      t.string :country
      t.text :description
      t.string :winery
      t.string :reporter
      
      t.timestamps
      
    end
  end
end

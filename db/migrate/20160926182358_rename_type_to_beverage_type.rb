class RenameTypeToBeverageType < ActiveRecord::Migration
  def change
    rename_column :beverages, :type, :varietal
  end
end


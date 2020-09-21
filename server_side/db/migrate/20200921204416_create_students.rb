class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.string :school
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end

class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :player
      t.string :team
      t.string :event
      t.references :game, index: true, foreign_key: true

      t.timestamps
    end
  end
end

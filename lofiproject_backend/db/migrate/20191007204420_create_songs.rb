class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :yt_link
      t.string :artist
      t.string :title

      t.timestamps
    end
  end
end

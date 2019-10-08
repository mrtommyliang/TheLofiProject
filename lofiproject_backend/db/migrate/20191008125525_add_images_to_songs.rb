class AddImagesToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :images, :string
  end
end

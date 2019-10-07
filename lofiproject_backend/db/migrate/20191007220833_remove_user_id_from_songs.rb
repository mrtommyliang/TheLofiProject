class RemoveUserIdFromSongs < ActiveRecord::Migration[6.0]
  def change
    remove_column :songs, :user_id, :bigint
    remove_column :users, :song_id, :bigint
  end
end

class ChangeUserIdOnSongs < ActiveRecord::Migration[6.0]
  def change
    change_column_null :songs, :user_id, true
  end
end

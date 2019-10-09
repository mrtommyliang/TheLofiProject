class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy]
  before_action :authorize_request, except: :index 

  # GET /songs
  def index
    @songs = Song.all

    render json: @songs
  end

  # PATCH/PUT /songs/1
  def update
    # create association (safe guard)
    @current_user.songs.push(@song) unless @current_user.songs.include?(@song)
  end

  # DELETE /songs/1
  def destroy
    # remove association
    @current_user.songs.delete(@song) unless !@current_user.songs.include?(@song)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_params
      params.require(:song).permit(:yt_link, :artist, :title)
    end
end

import React from 'react'
import '../css/HomeSongs.css'

const HomeSongs = (props) => {
  const list = props.songs.map(ele => {
    return (
      <div className="AllSongs">

        <a href={ele.yt_link}>
          <img
            className="albums"
            src={ele.images}
            target="_blank"
            alt='Album'
          />
        </a>

        <div className="title">
          Title: {ele.title}
        </div>

        <div className="artist">
          Artist: {ele.artist}
        </div>

        {props.favorites.find((fav) => fav.id === ele.id) ? 
          <button 
            onClick={() => props.removeFavorites(ele)}
            className="favoritesbtn">Remove</button> :
          <button
            onClick={() => props.getFavorites(ele)}
            className="favoritesbtn">Favorite</button>
          }

      </div>
    )
  })
  return (
    <>
      {list}
    </>
  )
}

export default HomeSongs
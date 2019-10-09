import React from 'react'
import '../css/HomeSongs.css'

const Favorites = (props) => {
  const list = props.favorites.map(ele => {
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

        <button
          onClick={() => props.removeFavorites(ele)}
          className="favoritesbtn">Remove</button>

      </div>
    )
  })
  return (
    <>
      {list}
    </>
  )
}

export default Favorites
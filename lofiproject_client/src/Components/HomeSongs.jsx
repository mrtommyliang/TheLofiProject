import React from 'react'
import { Link } from 'react-router-dom';
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

        <button className="favoritesbtn">Favorite</button>

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
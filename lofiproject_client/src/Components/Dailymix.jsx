import React from 'react';
import '../css/HomeSongs.css'

const Dailymix = () => {
  return (
    <div>
      <h1 className="recoTitle">Live Stations</h1>
      <div className="AllSongs">
        <a href="https://www.youtube.com/watch?v=hHW1oY26kxQ">
          <img
            className="albums"
            src="https://video-images.vice.com/articles/5b48bb7cc15b9700072bf196/lede/1531510329339-lofihiphop.jpeg?crop=0.9029535864978903xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*"
            target="_blank"
            alt='Album'
          />
        </a>

        <div className="title">
          Title: Beats to Study and Relax To
      </div>

        <div className="artist">
          Artist: ChilledCow
      </div>

      </div>
      <div className="AllSongs">
      <a href="https://www.youtube.com/watch?v=EcEMX-63PKY">
        <img
          className="albums"
          src="https://i.ytimg.com/vi/EcEMX-63PKY/maxresdefault.jpg"
          target="_blank"
          alt='Album'
        />
      </a>

      <div className="title">
        Title: Beats to Chill and Sleep To
      </div>

      <div className="artist">
        Artist: ChilledCow
      </div>

    </div>
    </div>
  )
}

export default Dailymix
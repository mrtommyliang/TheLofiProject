import React from 'react';
import '../css/about.css'
import nujabes from '../images/nujabes.png'
import jdilla from '../images/jdilla.jpg'
import jinsang from '../images/jinsang.jpg'
import sagun from '../images/sagun.jpg'
import tompa from '../images/tompa.jpg'


const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="lofiTitle">About Lofi Music</h1>

      <img className="lofiArtists" src={jdilla} alt="jdilla"/>
      <img className="lofiArtists" src={nujabes} alt="nujabes"/>
      <img className="lofiArtists" src={jinsang} alt="jinsang"/>
      <img className="lofiArtists" src={sagun} alt="sagun"/>
      <img className="lofiArtists" src={tompa} alt="tompa"/>

      <p className="summary">Lo–fi hip–hop has roots in much of the DIY music scene of the past 20 years. In terms of genre origins, the sound itself comes from the production process in lo–fi music (that is, music that is recorded at a lower quality than the standard hi–fi). This give the sound a slight distortion, almost as if the recording was muffled on purpose. Many artists from the '90s achieved this sound by using old recording equipment of the '70s, creating hypnagogic pop, a genre that Wire journalist James Keenan once described as music that is somewhere “between waking and sleeping.” The music was and still very much is an underground scene. Most lo–fi beat artists got their start from Adult Swim “bumps”, an intra–commercial 30 second–long scene that helped break up the absurdity of their programming. If you were like me and up at 3 am watching old One Piece and Cowboy Bebop reruns during Toonami, you definitely encountered the lo–fi beats of Flying Lotus and countless other artists that seeped into your subconscious without you properly recognizing how much you enjoyed it.</p>
      <p className="summary" id="citation">
        <a href="https://www.34st.com/article/2018/02/lo-fi-hip-hop-distorted-view">Full Article Here</a>
      </p>
    </div>
  )
}

export default About
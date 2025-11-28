import React from 'react';
import { useState } from 'react';
import './index.css'
import CenterLogo from './components/CenterLogo';
import LoadingEffect from './components/LoadingEffect';
import Button from './components/button';
import Title from './components/Title';
import AnimeImage from './components/AnimeImage';
import InfoBar from './components/InfoBar';
import Genres from './components/Genres';
import Synopsis from './components/Synopsis';
import MetadataBar from './components/MetadataBar';




function App() {

  const [info, SetInfo] = useState(null);
  const [loaded, SetLoaded] = useState(false);
  const [isClicked, SetClick] = useState(false);

  //Get random anime from Jikan API (SFW only)
  const getRandomAnime = async () => {
    SetLoaded(false);

    // Keep fetching until we get a SFW anime
    let response;
    let isSafe = false;

    while (!isSafe) {
      response = await fetch('https://api.jikan.moe/v4/random/anime?sfw')
        .then(res => res.json());

      // Check if the anime has NSFW ratings
      const rating = response.data.rating;
      const isNSFW = rating && (rating.includes('Rx') || rating.includes('R+') || rating.includes('Hentai'));

      if (!isNSFW) {
        isSafe = true;
      }
    }

    SetInfo(response);
    SetLoaded(true);
  }

  //Randomize Button
  function handleRandom(e){
    SetClick(true);
    getRandomAnime();
  }

  return (
    <React.Fragment>
    <CenterLogo />
    <Button func={handleRandom}/>

    {isClicked ? (
      loaded ? (
        <div className="anime-content">
          <Title name={info.data.title}/>
          <div className="anime-layout">
            <div className="anime-left">
              <AnimeImage name={info.data.images.jpg.image_url} />
            </div>
            <div className="anime-right">
              <Genres genres={info.data.genres}/>
              <MetadataBar
                type={info.data.type}
                year={info.data.year}
                rating={info.data.rating}
                duration={info.data.duration}
              />
              <InfoBar score={info.data.score} airing={info.data.status} numEp = {info.data.episodes}/>
              <Synopsis synopsis={info.data.synopsis}/>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '40px', marginBottom: '40px'}}>
            <a href={info.data.url} target="_blank" rel="noopener noreferrer"><button className='btn'>For more info</button></a>
          </div>
        </div>

      ) : (<LoadingEffect/>)
    ) : (
      <div className='Gif'>
        <img src="https://media.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif" alt='Anime character' width='30%'/>
      </div>

    )}
    

    </React.Fragment>
    
  )
}

export default App;

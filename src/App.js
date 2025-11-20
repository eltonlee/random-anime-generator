import React from 'react';
import { useState } from 'react';
import './index.css'
import CenterLogo from './components/CenterLogo';
import LoadingEffect from './components/LoadingEffect';
import Button from './components/button';
import Title from './components/Title';
import AnimeImage from './components/AnimeImage';
import InfoBar from './components/InfoBar';




function App() {

  const [info, SetInfo] = useState(null);
  const [loaded, SetLoaded] = useState(false);
  const [isClicked, SetClick] = useState(false);

  //Get random anime from Jikan API
  const getRandomAnime = async () => {
    SetLoaded(false);
    const response = await fetch('https://api.jikan.moe/v4/random/anime')
      .then(res => res.json());

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
          <AnimeImage name={info.data.images.jpg.image_url} />
          <InfoBar score={info.data.score} airing={info.data.status} numEp = {info.data.episodes}/>
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

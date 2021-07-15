import CenterLogo from './components/CenterLogo';
import './index.css'
import React from 'react';
import Button from './components/button';
import { useState, useEffect} from 'react';
//import AnimeCard from './components/AnimeCard';



function App() {

  const [anime, SetAnime] = useState([]);

  const getAnime = async () => {
    const temp = await fetch('https://api.jikan.moe/v3/anime/1')
      .then(res => res.json());
    
    SetAnime(temp);
  }

  useEffect(() => {
    getAnime();
    
    
  }, [])

  console.log(anime)

  return (
    
    <React.Fragment>
    <CenterLogo />
    <Button />
    < img src={anime.image_url} alt="" />

    </React.Fragment>
    
    
  )
}

export default App;

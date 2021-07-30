import CenterLogo from './components/CenterLogo';
import './index.css'
import React from 'react';
import Button from './components/button';
import { useState, useEffect} from 'react';
//import AnimeCard from './components/AnimeCard';



function App() {

  const [anime, SetAnime] = useState([]);
  const [info, SetInfo] = useState([]);

  const getAnime = async () => {
    const temp = await fetch('https://animechan.vercel.app/api/available/anime')
      .then(res => res.json());
    
    SetAnime(temp);
  }

  useEffect(() => {
    getAnime();
  }, [])

  //Get a random number between 0 and 795
  var rng = Math.random() * (795);
  rng = Math.floor(rng);
  const current_anime = anime[rng];
  

  //When passing a string into the URL, use backquotes not single quotes.
  const getInfo = async () => {
    const temp2 = await fetch(`https://api.jikan.moe/v3/search/anime?q=${current_anime}&order_by=title&sort=asc&limit=1`)
      .then(res => res.json());
    
    SetInfo(temp2);
  }

  useEffect(() => {
    getInfo();
  }, [])
    

  //console.log(anime)
  //console.log(info.results[0].title)
  //console.log(info.results)
  //console.log(current_anime)

  return (
    
    <React.Fragment>
    <CenterLogo />
    <Button />
    < img src={info.results[0].image_url} alt="" />
    </React.Fragment>
    
  )
}

export default App;

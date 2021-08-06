import React from 'react';
import { useState, useEffect} from 'react';
import './index.css'
import CenterLogo from './components/CenterLogo';
import LoadingEffect from './components/LoadingEffect';
import Button from './components/button';
import Title from './components/Title';
import AnimeImage from './components/AnimeImage';
import InfoBar from './components/InfoBar';



function App() {

  const [anime, SetAnime] = useState([]);
  const [info, SetInfo] = useState([]);
  const [loaded, SetLoaded] = useState(false);
  const [isClicked, SetClick] = useState(false);

  //Get a random number between 0 and 795 and return a random anime.
  function GenerateRandom(){
    var rng = Math.random() * (795);
    rng = Math.floor(rng);
    const current_anime = anime[rng];
    return current_anime;
  }

  const getAnime = async () => {
    const temp = await fetch('https://animechan.vercel.app/api/available/anime')
      .then(res => res.json());
    
    SetAnime(temp);
  }

  useEffect(() => {
    getAnime();
  }, [])

  //When passing a string into the URL, use backquotes not single quotes.
  const getInfo = async (search_anime) => {
    const temp2 = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_anime}&order_by=title&sort=asc&limit=1`)
      .then(res => res.json());
    
    SetInfo(temp2);
    SetLoaded(true);
  }
  //Randomize Button
  function handleRandom(e){
    SetClick(true);
    SetLoaded(false)
    var current_anime2 = GenerateRandom();
    getInfo(current_anime2);
  }

  console.log(info)

  return (
    <React.Fragment>
    <CenterLogo />
    <Button func={handleRandom}/>

    {isClicked ? (
      loaded ? (
        <div>
          <Title name={info.results[0].title}/>
          <AnimeImage name={info.results[0].image_url} />
          <InfoBar score={info.results[0].score} airing={info.results[0].airing} numEp = {info.results[0].episodes}/>
        </div>

      ) : (<LoadingEffect/>)
    ) : (null)}
    

    </React.Fragment>
    
  )
}

export default App;

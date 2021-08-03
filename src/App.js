import CenterLogo from './components/CenterLogo';
import './index.css'
import React from 'react';
import LoadingEffect from './components/LoadingEffect';
//import Button from './components/button';
import { useState, useEffect} from 'react';

//import AnimeCard from './components/AnimeCard';



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

  //console.log(current_anime)
  //console.log(info.results[0].title)
  console.log(info)
  //console.log(current_anime)

  //Checks if it is loading
  //if (isLoading){
  //  return <div className="centerlogo">
  //     <h1>
  //        Loading...
  //      </h1>
  //    </div>;
  //}

  return (
    <React.Fragment>
    <CenterLogo />

    <button 
      className='btn'
      onClick={handleRandom}
      >Randomize
    </button>

    {isClicked ? (
      loaded ? (
        <div>

          <h1
            className='title'>
            {info.results[0].title}
          </h1>

          <img src={info.results[0].image_url} alt="" />
          <p
            className='synopsis'>
            {info.results[0].synopsis}
          </p>
        </div>

      ) : (<LoadingEffect/>)
    ) : (null)}
    

    </React.Fragment>
    
  )
}

export default App;

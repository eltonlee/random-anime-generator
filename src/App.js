import CenterLogo from './components/CenterLogo';
import './index.css'
import React from 'react';
//import Button from './components/button';
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
  
  this.state = {
    loading: true,
    anime: null,
  };
  
  //When passing a string into the URL, use backquotes not single quotes.
  const getInfo = async (search_anime) => {
    const temp2 = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_anime}&order_by=title&sort=asc&limit=1`)
      .then(res => res.json());
    
    SetInfo(temp2);
  }

  useEffect(() => {
    getInfo(current_anime);
    this.setState({ anime: true, loading: false });
  }, [])
  
  function handleRandom(e){
    //Get a random number between 0 and 795
    var rng2 = Math.random() * (795);
    rng2 = Math.floor(rng2);
    const current_anime2 = anime[rng];
    getInfo(current_anime2);
  }

  //< img src={info.results[0].image_url} alt="" />
  //console.log(current_anime)
  //console.log(info.results[0].title)
  //console.log(info)
  //console.log(current_anime)

  if (this.state.loading) {
    return <div>loading...Anime</div>;
  }

  if (!this.state.anime) {
    return <div>didn't get an anime...</div>;
  }

  return (
    <React.Fragment>
    <CenterLogo />
    <button 
      className='btn'
      onClick={handleRandom}
      >Randomize
    </button>
    < img src={info.results[0].image_url} alt="" />
    </React.Fragment>
    
  )
}

export default App;

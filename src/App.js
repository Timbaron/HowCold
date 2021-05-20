import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [query,setQuery] = useState('');
  const APP_KEY = "7d92c49e028f564e80b75ff69ada7840"

  useEffect( () => {
    getWeather();
  }, [query]);

  const getWeather = async () => {
    
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APP_KEY}`);
    const data = await response.json();
    console.log(search);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <h1>Wanna know How Cold?</h1>
      <div className="search-form">
        <form onSubmit={getSearch} action="">
          <input type="text" className="search-input" placeholder="Enter Name of City" value={search} onChange={updateSearch}/>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Wanna know How Cold?</h1>
      <div className="search-form">
        <form action="">
          <input type="text" className="search-input"/>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;

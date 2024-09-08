import imageRickyMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null); 
  
  const handleClick = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const data = await api.json();
    
    setCharacters(data.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Ricky & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
          ): (
            <>
            <img src={imageRickyMorty} className="img-home" alt="RickyMorty" />
            <button onClick={handleClick} className='btn-search'>Ver personajes</button>
            </>
          )}
        
      </header>
    </div>
  );
}

export default App;

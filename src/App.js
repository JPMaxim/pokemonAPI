import './App.css';
import { useState, useEffect } from 'react';
import { Card } from './Card';
import { Form } from './Form';

function App() {

  const [pokemon, setPokemon] = useState('')
  const [inputName, setInputName] = useState('bulbasaur')

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(inputName)
  }

  const fetchPokemon = async (name) => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase()
    const response = await fetch(url)
    const data = await response.json()
    setPokemon(data)
  }
  useEffect(() => {
    fetchPokemon(inputName)
  }, [])

  if(!pokemon) return (
    <div>
      <h1>loading...</h1>
    </div>
  )
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="siteTitle">Pokemon API Project</h1>
        <Form 
          handleSubmit={handleSubmit}
          inputName={inputName}
          setInputName={setInputName}
        />
        <Card 
          pokemon={pokemon} 
          fetchPokemon={() => fetchPokemon()} 
        />
      </header>
    </div>
  );
}

export default App;

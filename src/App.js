import logo from './logo.svg';
import './App.css';
import playersData from './data/data.json'
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Header/Players/Players';
import Selected from './components/Selected/Selected';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [players, setPlayers]=useState([]);
  const [selected, setSelected]=useState([]);
  useEffect(()=>{
    setPlayers(playersData);
    
  },[])

  const handleAddPlayer =(player)=>{
    const newSelected=[...selected, player];
    setSelected(newSelected)
  }
  
  return (
    <div >

        <Header players={players}></Header>
        
        <Selected selected={selected}></Selected>
        
          {
            players.map(player=><Players player={player}  handleAddPlayer={handleAddPlayer} key={player.id}></Players>)
          }
         
    </div>
  );
}

export default App;

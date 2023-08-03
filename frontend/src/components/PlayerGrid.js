import {useEffect, useState} from 'react'
import Player from './Player';
const PlayerGrid = () => {
  const [players, addPlayer] = useState([]);

  useEffect(() => {
    const getAllPlayers = async () => {
      const response = await fetch('https://www.balldontlie.io/api/v1/players/237');
      const player = await response.json()
      addPlayer([...players, player])

      
    }

    getAllPlayers();
    
    
  }, [])

  return (
    <div className="player-grid">
      {players.map((player) => {
        return(<Player playerInfo={player}/>);
      })}
    </div>
    
  );
}

export default PlayerGrid;
import {useEffect, useState} from 'react'
import Player from './Player';

const PlayerGrid = () => {
  const [players, addPlayer] = useState([]);
  /*
    Lebron: 237
    Davis: 117
    Max Christie: 38017697
    Reaves: 17553995
    Hachi: 666609
    Prince: 383
    Reddish: 666860
    DLo: 405
    gabe: 457
    Hayes: 666626
    Jalen Hood-Schifino: NaN
    Maxwell Lewis: NaN
  */
  const allLakerPlayerIDs = [237, 117, 38017697, 17553995, 666609, 383, 666860, 405, 457, 1603383, 666626]

  // hashmap of player ids to pass into Player Template
  const playerImgMap = {
    237: '/playerPictures/lJames.png',
    117: '/playerPictures/aDavis.png',
    38017697: '/playerPictures/mChristie.png',
    17553995: '/playerPictures/aReaves.png',
    666609: '/playerPictures/rHachimura.png',
    383: '/playerPictures/tPrince.png',
    666860: '/playerPictures/cReddish.png',
    405: '/playerPictures/dRussell.png',
    1603383: '/playerPictures/gVincent.png',
    666626: '/playerPictures/jHayes.png',
    457: '/playerPictures/jVanderbilt.png'
  }
  
  // whenever page is rendered get all players from databse
  useEffect(() => {
    const getAllPlayers = async () => {
      // receive all promises from api
      try {
        const fetchPromises = allLakerPlayerIDs.map(async (LakerID) => {
          const response = await fetch('https://www.balldontlie.io/api/v1/players/' + LakerID);
          return response.json();
        });
        
        // gell all players from api
        const fetchedPlayers = await Promise.all(fetchPromises);
        // make current state of site have all players
        addPlayer(fetchedPlayers);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    
    //cal function
    getAllPlayers();
    console.log(players);
  }, []);



  return (
    <div className="team-container">
      {players.map((player) => {
        const imgPath = playerImgMap[player.id]
        return(<Player key={player.id} playerInfo={player} img={imgPath}/>);
      })}
      
    </div>
    
  );
}

export default PlayerGrid;
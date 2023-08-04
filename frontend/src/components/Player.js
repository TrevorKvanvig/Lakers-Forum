
const Player = ({playerInfo, img}) => {
  return (
    <div className="player-container">
      <img className="player-portrait" src={img} alt="Player Image" />
      <p>{playerInfo.first_name} {playerInfo.last_name}</p>
      
      
    </div>
    
  );
}

export default Player;
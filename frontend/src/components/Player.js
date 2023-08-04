import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Player = ({playerInfo, img}) => {
  return (
    <Link to={'player-stats/' + playerInfo.id}>
      <motion.button whileHover={{scale: 1.1}} className="player-container">
        <img className="player-portrait" src={img} alt="Player Image" />
        <p>{playerInfo.first_name} {playerInfo.last_name}</p>
      </motion.button>
    </Link>
    
    
  );
}

export default Player;
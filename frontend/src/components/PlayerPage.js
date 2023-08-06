import { useParams } from "react-router-dom";
import { useEffect } from "react";
const PlayerPage = () => {
  const {id} = useParams();

  useEffect(() => {
    const getAllStats = async () => {
      const response = await fetch('https://www.balldontlie.io/api/v1/stats?player_ids[]=' + id)

      const stats  = await response.json()
      console.log(stats);
    }
    getAllStats()
  }, [id])

  return(<h1>Player Page for id {id}</h1>);
}

export default PlayerPage;
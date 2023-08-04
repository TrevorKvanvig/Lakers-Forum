import { useParams } from "react-router-dom";
import { useEffect } from "react";
const PlayerPage = () => {
  const {id} = useParams();
  
  useEffect(() => {

  }, [id])

  return(<h1>Player Page for id {id}</h1>);
}

export default PlayerPage;
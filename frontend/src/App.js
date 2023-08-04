import { Route, Routes } from "react-router-dom";
import LakersPage from "./components/LakersPage";
import Navbar from "./components/Navbar";
import PlayerPage from "./components/PlayerPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LakersPage />}/>
        <Route path='/player-stats/:id' element={<PlayerPage />}/>
      </Routes>
      
    </>

  );
}

export default App;

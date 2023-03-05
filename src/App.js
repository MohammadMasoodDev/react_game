import { useContext } from "react";
import Start from "./components/Start/Start";
import Board from "./components/Board/Board";
import Modal from "./components/Modal/Modal";
import './App.css';

import { GameContext } from "./context/GameContext";

function App() {
  const {screen} = useContext(GameContext)
  return (
    <div className="App">
      <div className="container">
        {screen === 'start' && <Start/>}
         {screen === 'game' && <Board/>}
      {/* <Start/> */}
     {/* <Board/> */}
      </div>
      <Modal/>
    </div>
  );
}

export default App;

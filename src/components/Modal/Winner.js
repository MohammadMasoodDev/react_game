import React, { useContext } from 'react'
import Oicon from '../Icons/Oicon'
import Xicon from '../Icons/Xicon'
import { GameContext } from '../../context/GameContext'


const Winner = () => {
  const {winner,handleReset,handleNextRound} = useContext(GameContext)
  return (
    <div className='score'>
      {winner && winner !== "no" ? (
        <>
          <p>yoy win!</p>
          <h3 className={`score__title ${
              winner === "o" ? "text-yellow" : "text-blue"
            } `} >
            {winner === "x" && <Xicon />}
            {winner === "o" && <Oicon />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className="score__title text-yellow">No Winner !</h3>
      )}
       
        <div className='score__btns'>
    <button className='btn btn-sm' onClick={handleReset}>Quit</button>
    <button className='btn btn-sm btn-yellow' onClick={handleNextRound} >Restart</button>
        </div>
    </div>
  )
}

export default Winner
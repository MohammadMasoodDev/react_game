import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import Oicon from '../Icons/Oicon'
import Xicon from '../Icons/Xicon'

const Start = () => {

 const {activeUser,  setActiveUser, handleStart} = useContext(GameContext)
 
 return (
    <div className='start'>
       
    <div className='start__header'>
<Xicon/>
<Oicon />
    </div>
 
    <div className='card shadow-gray'>
        <h1 className='text-lg'>Welcome to XO Game</h1>
   
    <div className='start__players'>
        <span className={activeUser === 'x' ? 'start__players--active' : ''}
        
        >
           <Xicon color={activeUser === 'x'  ? 'dark' : 'light'}/>
        </span>
        <span className={activeUser === 'o' ? 'start__players--active' : ''}
        
        >
            <Oicon color={activeUser === 'o' ? 'dark' : 'light'}/>
        </span>
    </div>
    
<p className='text-light'>remember x goes first</p>  
</div>

 

           
    <div className='start__btns'>

<button className='btn btn-blue' onClick={()=> {handleStart('user')}}>new game </button>
    </div>
         

    </div>
  )
}

export default Start
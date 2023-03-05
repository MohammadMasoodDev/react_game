import React,{useContext} from 'react'
import Winner from './Winner'
import Restart from './Restart'

import {ModalContext} from '../../context/ModalContext'
const Modal = () => {
  const {show, modalMode} = useContext(ModalContext)
  return (
   <>
   {show && (<div className="modal">
        
    <div className="modal__content">
      <div className="container">
        {modalMode === 'winner' && <Winner/>}
         {modalMode === 'start' && <Restart/>}
        {/* <Winner/> */}
        {/* <Restart/> */}
      </div>
    </div>
    </div>)}
   </>
    
  )
}

export default Modal
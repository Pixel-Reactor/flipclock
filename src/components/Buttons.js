import React from 'react'
import {HandleTime} from '../context/Context'
const Buttons = () => {
    const {setstartstop,startstop,setminutes,sethour,setseconds,Type,setalarm}= HandleTime();
    const HandleReset = () => {
        setstartstop(0);
        setseconds(0);
        sethour(0);
        setminutes(0);
        setalarm(false)
      }
      const HandleStartStop = () =>{
        startstop? setstartstop(false) : setstartstop(true)
        
      }
    const HandleInputRender = () => {
        if (startstop) {
          return 'STOP'
        } else {
          return 'START'
        }
      }
      const HiSh = () =>{
       if(Type !== 'TIME'){
        return {transition:'all 0.3s',opacity:'1'}
       }else{
        return {transition:'all 0.3s',opacity:'0'}
       }
      }
  return (
    <div style={HiSh()}>
      <div className='btnscont'>
        <input type='button' value={HandleInputRender()} onClick={HandleStartStop} />
        <input type='button' value='RESET' onClick={HandleReset} />
    </div>
    </div>
  )
}

export default Buttons

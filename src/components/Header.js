import React from 'react'
import { useState } from 'react';
import {HandleTime} from '../context/Context'
const Header = () => {
    const {Switch,hour,seconds,minutes,startstop,setseconds,setminutes,sethour,Type,setstartstop}= HandleTime();

   const [selected, setselected] = useState({
    width:'100%',
    height:'100%',
    borderBottom:'3px solid black',
    transition:'0.1s all'
   });
   const [notselected, setnotselected] = useState({
    width:'100%',
    height:'100%',
    borderBottom:'0px solid black',
    transition:'0.1s all'
   });
   const HandleCountDown = () =>{
    if(Type != 'COUNTD'){
      setstartstop(false)
      Switch('COUNTD');
      setseconds(0);
      sethour(0);
      setminutes(0)
    }
   
   }
   const HandleChrono = () =>{
    if(Type != 'CHRONO'){
      setstartstop(false)
      Switch('CHRONO');
      setseconds(0);
      sethour(0);
      setminutes(0)
    }
   
   }
   const HandleStyle = (sel) =>{
    if(sel === Type){
      return selected
    }else{
      return notselected
    }
   }
  return (
    <header className='header'>
      <p>The</p>
     <h1>FLIPCLOCK</h1>
     
        <ul>
            <li onClick={()=>Switch('TIME')}>
              <div style={HandleStyle('TIME')}><p>TIME</p> </div> 
            </li>
            <li onClick={HandleCountDown}>
            <div style={HandleStyle('COUNTD')}><p>COUNTDOWN</p></div> 
            </li>
            <li onClick={HandleChrono}>
            <div style={HandleStyle('CHRONO')}><p>CHRONO</p></div> 
            </li>
        </ul>
     
    </header>
  )
}

export default Header

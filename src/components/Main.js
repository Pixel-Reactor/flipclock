import React from 'react'
import Flip from './Flip'
import { useEffect, useState } from 'react';
import { HandleTime } from '../context/Context'
const Main = () => {
  const [main, setmain] = useState({
    width: '460px',
    height: '350px',
    
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'rotate(0deg)',
    opacity: 1,
    animation: 'none'
  });
  const { Switch, seconds, minutes, hour, alarm } = HandleTime();
  useEffect(() => {
    alarm? setmain({...main,animation:'alarm 0.8s infinite'}) :setmain({...main,animation:'none'})
  }, [alarm]);

  return (
    <div style={main}>
      <Flip type={'HOURS'} time={hour} />
      <p style={{ fontSize: '40px', fontWeight: '900', color: 'black', transform: 'translateY(-28px)' }}>:</p>
      <Flip type={'MINUTES'} time={minutes} />
      <p style={{ fontSize: '40px', fontWeight: '900', color: 'black', transform: 'translateY(-28px)' }}>:</p>
      <Flip type={'SECONDS'} time={seconds} />

    </div>
  )
}

export default Main

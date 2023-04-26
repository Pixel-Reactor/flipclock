import React from 'react'
import Flip from './Flip'
import { useEffect, useState } from 'react';
import { HandleTime } from '../context/Context'
import alarms from '../sounds/alarm.mp3'
const Main = (props) => {
  const { sound, setsound } = HandleTime();
  const alarmsound = new Audio(alarms);
  alarmsound.load();
  alarmsound.muted = false;
  alarmsound.loop = false;
  alarmsound.volume = 0.3;
  
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
  const PlayAlarm = () => {
    alarmsound.play();
  }
  useEffect(() => {
    if(props.sound){
      setsound(true);
    }else{
      setsound(false)
    }
  }, [props.sound]);

  const { seconds, minutes, hour, alarm } = HandleTime();
  useEffect(() => {
    if (sound) {
      PlayAlarm();
    }

    alarm ? setmain({ ...main, animation: 'alarm 0.8s infinite' }) : setmain({ ...main, animation: 'none' })
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

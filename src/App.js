import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { TaskContextProvider } from './context/Context';
import './App.css';
import Buttons from './components/Buttons';
import sun from './img/sun.png';
import moon from './img/moon.png';
import mute from './img/mute.png';
import sound from './img/sound.png'




function App() {

const [volume, setvolume] = useState(true);
  const [seconds, setseconds] = useState(0);
  const [chrono] = useState(false);
  const [App, setApp] = useState({
    minHeight: '100vh',
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    color: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'all 1s'
  });
  const [volimg, setvolimg] = useState('sound');
  useEffect(() => {
    if (chrono) {
      const interval = setInterval(() => {
        setseconds(seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [chrono, seconds]);
const HandleSound = () =>{
  if(volimg === 'sound'){
    setvolimg('mute');
    setvolume(false)
  }
  else{
    setvolimg('sound');
    setvolume(true)
  }
}



  return (
    <TaskContextProvider>
      <div className="theme">
        <button className='btn' onClick={() => setApp({ ...App, backgroundColor: 'black', color: 'white' })}><img src={moon} width='20px' height='20px' /></button>
        <button className='btn' onClick={() => setApp({ ...App, backgroundColor: 'white', color: 'black' })}><img src={sun} width='20px' /></button>
        <button className='btn' onClick={HandleSound}><img src={volimg === 'sound' ? sound : mute} width='20px' /></button>

      </div>
      <div style={App}>
        <Header />
        <Main sound={volume} time={seconds} />
        <Buttons />
      </div>
    </TaskContextProvider>
  );
}

export default App;

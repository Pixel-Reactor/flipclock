import Header from './components/Header';
import Flip from './components/Flip';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { TaskContextProvider } from './context/Context';
import {HandleTime} from './context/Context'
import './App.css';
import Buttons from './components/Buttons';
import sun from './img/sun.png';
import moon from './img/moon.png'


function App() {
  const [seconds, setseconds] = useState(0);
  const [chrono, setchrono] = useState(false);
const [App, setApp] = useState({
  minHeight: '100vh',
  backgroundColor: 'rgb(255, 255, 255)',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  color:'rgb(0, 0, 0)',
  backgroundColor: 'rgb(255, 255, 255)',
  transition:'all 1s'
});

  useEffect(() => {
    if (chrono) {
      const interval = setInterval(() => {
        setseconds(seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }


  }, [chrono,seconds]);

  const HandleStartStop = () => {
    chrono ? setchrono(false) : setchrono(true)
  }

 

  return (
    <TaskContextProvider>
      <div className="theme"><button className='btn' onClick={()=>setApp({...App,backgroundColor:'black',color:'white'})}><img src={moon} width='20px' /></button><button className='btn' onClick={()=>setApp({...App,backgroundColor:'white',color:'black'})}><img src={sun} width='20px' /></button></div>
    <div style={App}>
      <Header />
      <Main time={seconds} />
      <Buttons />
    </div>
    </TaskContextProvider>
  );
}

export default App;

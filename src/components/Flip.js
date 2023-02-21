import React from 'react'
import { useState, useEffect } from 'react'
import plus from '../img/plus.png'
import minus from '../img/minus.png'
import {HandleTime} from '../context/Context'
const Flip = (props) => {
    const {setminutes,setseconds,sethour,Type,seconds,minutes,hour,startstop,alarm,setalarm} = HandleTime();
    const [disable, setdisable] = useState(false);
    const [cont, setcont] = useState(props.time);
    const [pup, setpup] = useState({
        fontSize: '80px',
        transform: 'translateY(50px) rotateX(0deg)',
        textShadow: '2px 2px 4px #000000',
        fontWeight:'900',
        color:'white'
    });
  
    const [Fu, setFu] = useState({
        width: '120px',
        height: '100px',
        position: 'absolute',
        border: '1px solid  rgb(68, 68, 68)',
        top: 0,
        backgroundColor: 'rgb(20,20,20)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'bottom',
        transform: 'rotate3d(-1, 0, 0, 0deg)',
        overflow: 'hidden',
        zIndex: '1',
        transition: 'all 0.5s',
        borderTopLeftRadius:'25px',
        borderTopRightRadius:'25px',

    });
    const [Fub, setFub] = useState({
        width: '120px',
        height: '100px',
        position: 'absolute',
        border: '1px solid  rgb(68, 68, 68)',
        top: 0,
        backgroundColor: 'rgb(20,20,20)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'bottom',
        transform: 'rotate3d(-1, 0, 0, 0deg)',
        overflow: 'hidden',
        zIndex: '0',
        borderTopLeftRadius:'25px',
        borderTopRightRadius:'25px',
        
    });
    const [Fd, setFd] = useState({
        width: '120px',
        height: '100px',
        position: 'absolute',
        border: '1px solid  rgb(68, 68, 68)',
        top: '102px',
        backgroundColor: 'rgb(30, 30, 30)',
        color: 'white',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        transformOrigin: 'top',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: '0',
        boxShadow:'rgba(255, 255, 255, 1) 500px 50px 36px -28px inset;',
        borderBottomLeftRadius:'25px',
        borderBottomRightRadius:'25px',
        boxShadow: 'rgba(240, 240, 240, 0.35) 0px -50px 36px -28px inset',
    });
    const [Fdb, setFdb] = useState({
        width: '120px',
        height: '100px',
        position: 'absolute',
        border: '1px solid  rgb(48, 48, 48)',
        top: '100px',
        backgroundColor:'rgb(30, 30, 30)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        transformOrigin: 'top',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: '0',
        borderBottomLeftRadius:'25px',
        borderBottomRightRadius:'25px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
    });
    
    const [HandleBtn, setHandleBtn] = useState({
        transition:'all 0.5s',
        opacity:'0'
       });
  
   useEffect(() => {
    if(Type === 'COUNTD' && !startstop && !alarm){
         setHandleBtn({...HandleBtn,opacity:'1'})
    }else{
        setHandleBtn({...HandleBtn,opacity:'0'})}
   }, [Type,startstop,alarm]);

    useEffect(() => {
      
        setcont(props.time)
        setFu({ ...Fu,transition:'all 0.3s', transform: 'rotate3d(-1, 0, 0, 180deg) translateY(-0.3px)',backgroundColor:'rgb(30, 30, 30)' })
       const timer= setTimeout(() => {
            setpup({...pup,transform:'translateY(50px) rotateX(180deg)',color:'rgb(225, 225, 225)'})
        }, 100);
        setTimeout(() => {
            setFu({ ...Fu,transition:'none', transform: 'rotate3d(-1, 0, 0, 0deg)',backgroundColor:'rgb(20, 20, 20)' })
            setpup({...pup,transform:'translateY(50px) rotateX(0deg)',color:'white'})
        }, 500);
        
    }, [props.time]);
  
    const HandleRender = () =>{
        if(cont < 10){
            return `0${cont}`
        }
        else{
            return cont
        }
    }
   
    const HandleCountDownPlus = () =>{
        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 500);

        props.type === 'SECONDS'? setseconds(seconds +1) : props.type === 'MINUTES'? setminutes(minutes+1) : sethour(hour+1) 
    }
   
    const HandleCountDownMinus = () =>{
        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 500);
        props.type === 'SECONDS' && seconds > 0? setseconds(seconds -1) : props.type === 'MINUTES' && minutes > 0? setminutes(minutes -1) : props.type === 'HOURS'&& hour >0? sethour(hour-1) : alert('Can not set a time value below 0!')
    }
    return (
        <>
        <div className='flipbox'>
            <div style={HandleBtn}>  <button className='setbtn' disabled={disable} onClick={HandleCountDownPlus}><img width={'40px'} src={plus} /></button></div>
          
        <div className='flipcnt'>
        
            <div style={Fu}><p style={pup}>{HandleRender()}</p></div>
            <div style={Fub}><p className='pup'>{HandleRender()}</p></div>
            <div style={Fd}><p className='pdw'>{HandleRender()}</p></div>
            <div style={Fdb}><p className='pdw'>{HandleRender()}</p></div>
           
            
        </div>
        <div style={HandleBtn}>  <button  className='setbtn' disabled={disable} onClick={HandleCountDownMinus} ><img width={'40px'} src={minus} /></button></div>
        <p className='flipboxp'>{props.type}</p>
       
      
        </div>
        </>
    )
}

export default Flip

import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const TaskContext = createContext();

export const HandleTime = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("HandleTime must be used within a TaskContextProvider ")
    }
    return context;
}
export const TaskContextProvider = ({ children }) => {
    const [alarm, setalarm] = useState(false);
    const [Type, setType] = useState('TIME');
    const [startstop, setstartstop] = useState(0);
    const [seconds, setseconds] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [hour, sethour] = useState(0);
    const [sound, setsound] = useState(true);
   
    useEffect(() => {
        if (Type === 'TIME') {
            const interval = setInterval(() => {
                var Time = new Date();
                setseconds(Time.getSeconds());
                setminutes(Time.getMinutes());
                sethour(Time.getHours())
            }, 1000);
            return () => {
                clearInterval(interval)
            };
        }

        if (Type === 'CHRONO' && startstop) {
            console.time('chrono')
            const interval = setInterval(() => {
                if (seconds + 1 > 59) {
                    setseconds(0);
                    setminutes(minutes + 1)
                } else {
                    setseconds(seconds + 1)
                }
                if (minutes + 1 > 59) {
                    setminutes(0);
                    sethour(hour + 1)
                }
                console.timeLog('chrono')
            }, 985);
            return () => {
                clearInterval(interval)
            };

        }
        if (Type === 'COUNTD' && startstop) {

            const interval = setInterval(() => {
                if (hour && minutes === 0 && seconds === 0) {
                    sethour(hour - 1);
                    setminutes(59);
                    setseconds(59)
                } if (minutes && seconds === 0) {
                    setminutes(minutes - 1);
                    setseconds(59);
                } if (seconds) {
                    setseconds(seconds - 1)
                } if (!hour && !minutes && !seconds) {
                    setTimeout(() => {
                        setalarm(false)
                    }, 5000);
                    setalarm(true);
                    setstartstop(false);


                }
            }, 985);
            return () => {
                clearInterval(interval)
            };

        }

    }, [Type, seconds, startstop]);
    const Switch = (change) => {
        if (change) {
            setType(change)
        }
        return Type
    }

    return (

        <TaskContext.Provider value={{ Type, Switch, seconds, minutes, hour, setstartstop, startstop, setseconds, setminutes, sethour, alarm, setalarm,sound,setsound }}>
            {children}
        </TaskContext.Provider>



    )
}

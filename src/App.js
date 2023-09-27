import './App.css';
import React, {useEffect, useState} from "react";
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

function App() {


    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const clockTime = new Date().toLocaleTimeString()
    const [clockTime1, setClockTime1] = useState(clockTime)

    useEffect(()=> {
        const interval =setInterval(()=> {
            setClockTime1(clockTime)
        },1000)


    },[clockTime1])

    const clockDate = new Date().toLocaleDateString()
    const [clockTime2, setClockTime2] = useState(clockTime)

    useEffect(()=> {
        const interval =setInterval(()=> {
            setClockTime2(clockDate)
        },1000)


    },[clockTime2])

    return (
        <>
            <ClockTime date={clockTime}/>
            <ClockDate date={clockDate}/>
        </>
    );
}

export default App;
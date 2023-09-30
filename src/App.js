import './App.css';
import React, {useEffect, useState} from "react";



function App() {


    const data = 123
    const arr2 = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

const [time, setTime] = useState(0)
const [stop, setStop] = useState(false)
    const [lap, setLap] = useState([])


    useEffect(() => {
        const interval = setInterval(()=> {

            setTime(stop ? time : prevState => prevState + 1)

        }, 1000)
        return () => clearInterval(interval)

    }, [stop, time]);


    const handleLap = () => {
        setLap(() => [...lap, time])
    }

    const handleStop = () => {
        setStop(true)
    }
    const handleStart = () => {
        setStop(false)
    }
    const handleReset = () => {
        setTime(0)
    }




    return (
        <>
            <h1>Time: {time}s</h1>
            <button onClick={handleLap}>Lap</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStart}>Start</button>
            <h2>Laps:</h2>
            <ul>
                {lap.map((elem, index)=> {
                    return (
                        <li key={index}>{elem}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default App;
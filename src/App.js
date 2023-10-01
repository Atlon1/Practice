import './App.css';
import React, {useEffect, useState} from "react";



function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const [time, setTime] = useState(2000)
    const [time2, setTime2] = useState(time)
    const [disabled, setDisabled] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (time <= 0) {
                setDisabled(true)
                setTime(0)
            } else {
                setTime(time => time - 50)
            }
        }, 50)
        return () => clearInterval(interval)
    }, [time,count]);

    const handleClike = () => {
        setCount(count + 1)
        setTime2(time2 - 50)
        setTime(time2)

    }

    return (
        <>
            <button onClick={handleClike} disabled={disabled}>Click me!</button>
            <h1>{count}</h1>
            <div>
                <h2>{time}</h2>
            </div>
        </>
    );
}

export default App;
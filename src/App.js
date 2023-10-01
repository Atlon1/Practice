import './App.css';
import React, {useEffect, useState} from "react";



function App() {


    const data = 123
    const arr2 = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const [randomNumber, setRandomNumber] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = Math.ceil(Math.random()* 5)
            setRandomNumber(randomNumber)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []);



    return (
        <>
            {randomNumber >= 3 ? 'Większa lub równa 3' : 'Mniejsza od 3' }
        </>
    );
}

export default App;
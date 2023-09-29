import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const [box, setBox] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(() => {
        document.title = `Clicked ${count}`
    }, [count]);

    const handleChange = () => {
        setCount(prevState => prevState + 1)
        setBox(count * 1.2)
    }

    return (
        <>
            <p
                onClick={handleChange}
                style={{
                fontSize: count + "rem"
            }}>Kliknięto mnie juz: {count} razy</p>
        </>
    );
}

export default App;
import './App.css';
import React, {useEffect, useState} from "react";



function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const handleClick = () => {
        setLeft(Math.floor((1000) * Math.random()))
        setTop(300 + Math.floor((600 - 300) * Math.random()))
    }

    return (
        <>
            <div style={ {
                width: 100,
                height: 100,
                position: 'absolute',
                backgroundColor: 'red',
                top: top,
                left: left,
            }}
            onMouseEnter={handleClick}/>
        </>
    );
}

export default App;
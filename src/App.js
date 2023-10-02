import './App.css';
import React, {useEffect, useState} from "react";



function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const [disabled, setDisabled] = useState(false)

    const handleClick = () => {
        setDisabled(!disabled)
    }


    return (
        <>
            <div style={{
                width: 100,
                height: 100,
                backgroundColor: disabled ? 'yellow' : 'white',
                border: '1px solid black',
            }}>
                <button onClick={handleClick}>{disabled ? 'Enabled' : 'Disabled'}</button>
            </div>
        </>
    );
}

export default App;
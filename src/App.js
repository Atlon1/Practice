import './App.css';
import React, {useState} from "react";


function App() {


    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
 const [color, setColor] = useState('#000')


    const handleColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor)
    }

    return (
        <>
        <div
            onMouseEnter={handleColor}
            style={
            {
                width: '200px',
                height: '200px',
                backgroundColor: color
            }
        }></div>

        </>
    );
}

export default App;
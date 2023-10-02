import './App.css';
import React, {useEffect, useState} from "react";



function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
 const [width, setWidth] = useState('500px');
    const [height, setHeight] = useState('200px');
    const [color, setColor] = useState('green');

   const handleClick1 = () => {
       setWidth('200px');
       setHeight('300px');
       setColor('orange');
   }

   const handleClick2 = () => {
       setWidth('100px');
       setHeight('700px');
       setColor('blue');
   }

   const handleClick3 = () => {
       setWidth('500px');
       setHeight('200px');
       setColor('green');
   }

    return (
        <>
            <div style={
                {
                    width: width,
                    height: height,
                    backgroundColor: color
                }
            }
            >
            </div>
            <button onClick={handleClick1}>Button 1</button>
            <button onClick={handleClick2}>Button 2</button>
            <button onClick={handleClick3}>Button 3</button>
        </>
    );
}

export default App;
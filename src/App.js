import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


const [color, setColor] = useState(true)

    useEffect(()=> {
        const timer = setTimeout(()=> {
            setColor(!color)
        },5000)
        return () => clearTimeout(timer)
    }, [color])

    return (
        <>
       <div style={
           {
               width: '200px',
               height: '200px',
               backgroundColor: color ? 'green' : 'red'
           }
       }></div>

        </>
    );
}

export default App;
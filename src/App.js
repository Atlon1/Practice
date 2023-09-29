import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [box, setBox] = useState([])

    const handlebox = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setBox(prevState => [...box, randomColor])
    }

    console.log(box)

    return (
        <>
            <button onClick={handlebox}>dodaj boxa</button>
            {box.map((elem, index)=> {
                return (
                    <div
                        key={index}
                        style={
                        {
                            width: '200px',
                            height: '200px',
                            backgroundColor: elem
                        }
                    }></div>
                )
            })}

        </>
    );
}

export default App;
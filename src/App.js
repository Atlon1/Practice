import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [box, setBox] = useState('lolololol')


const handleUpper = () => {
        setBox(prevState => prevState.toUpperCase())
}
const handleLower = () => {
        setBox(prevState => prevState.toLowerCase())
}




    return (
        <>
       <h1>{box}</h1>
            <button onClick={handleUpper}>upper</button>
            <button onClick={handleLower}>lower</button>


        </>
    );
}

export default App;
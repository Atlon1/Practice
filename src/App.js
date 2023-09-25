import './App.css';
import React from "react";



function App() {


    const data =123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = () => {
    }

    const handleFirst = () =>{
        console.log('pierwszy przycisk')
    }

    const handleSec = () => {
        const numA = parseInt(prompt('Podaj liczbe a'))
        const numB = parseInt(prompt('Podaj liczbe b'))
        console.log(Math.pow(numA, numB))
    }

    const handleThird = () => {
        console.log(window.innerWidth, window.innerHeight)
    }

console.log(result())

    return (
        <>
                <button onClick={handleFirst}>klik 1</button>
                <button onClick={handleSec}>klik 2</button>
                <button onClick={handleThird}>klik 3</button>
        </>
    );
}

export default App;
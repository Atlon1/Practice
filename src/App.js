import './App.css';
import React, {useEffect, useState} from "react";
import ButtonClick from "./Examples/ButtonClick";


function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)




    return (
        <>
        <form>
            <input onChange={(e) => setCounter(e.target.value)} type='text'/>
            <input onChange={(e) => setCounter2(e.target.value)} type='text'/>
        </form>
            <h1>{ isNaN(counter) || isNaN(counter2) ? 'Podaj dwie liczby' : parseInt(counter) + parseInt(counter2)}</h1>

        </>
    );
}

export default App;
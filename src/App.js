import './App.css';
import React, {useEffect, useState} from "react";
import ButtonClick from "./Examples/ButtonClick";


function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [name, setName] = useState('Maciej')



    return (
        <>
            <h1>{name}</h1>
            <form>
                <input type='text' onChange={(e) => setName(e.target.value)}/>
            </form>
        </>
    );
}

export default App;
import './App.css';
import React, {useEffect, useState} from "react";
import AdultStuff from "./AdultStuff";


function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const [number, setNumber] = useState(0)


    return (
        <>
            <form>
                <input
                    onChange={(e) => setNumber(e.target.value)}
                    type='number'/>
                    <AdultStuff number={number}/>
            </form>
        </>

    );
}

export default App;
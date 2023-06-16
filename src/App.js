import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = 230
    // const arr3 = '==T'
    // const arr4 = 110
    // const arr5 = true


    const result = (a) => {
        return Number(a / 1.15).toFixed(2)

    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;

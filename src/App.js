import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = 0
    // const arr3 = '==T'
    // const arr4 = 110
    // const arr5 = true


    const result = (a) => {
        return a > 0 ? Number((a / 1.15).toFixed(2)) : Number(-1)

    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;

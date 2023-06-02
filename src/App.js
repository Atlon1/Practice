import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 122
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return `Value is ` + ("00000" + a).slice(-5)

    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;

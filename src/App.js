import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = "Nike"
    // const arr3 = 6
    // const arr4 = 3
    // const arr5 = true


    const result = (a) => {
        return   a === null ? null :  a.length >= 1 ? `hello ${a}!` : null
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;

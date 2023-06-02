import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = "codewarriors"
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
            return a.replace(/[^aeiou]/g, " ").split(' ').sort((a, b) => b.length - a.length)[0].length

    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;

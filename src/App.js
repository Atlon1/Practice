import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = "xyab"
    const arr3 = "xzca"
    // const arr4 = 4
    // const arr5 = true



    const result = (a,b) => {
        return (a+b).split('').filter(c => !a.includes(c) || !b.includes(c)).join('')
    }

    console.log(result(arr2,arr3))

    return (
        <div>

        </div>
    );
}

export default App;

import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = "xyab"
    // const arr3 = "xzca"
    // const arr4 = 4
    // const arr5 = true



    const result = (a) => {
        return a.trim() === a && !a.includes("  ")
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;

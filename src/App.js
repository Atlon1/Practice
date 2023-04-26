import './App.css';
import React from "react";


function App() {


    const arr1 = "B"
    const arr2 = '\C'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b) => {

        if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
            return -1
        } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
            return 1
        } else return 0

    }


    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;

import './App.css';
import React from "react";


function App() {


    const arr1 = "door"
    const arr2 = 1939
    const arr3 = 5
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b,c) => {
        return a === a.split('').sort().join('')
    }
    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;

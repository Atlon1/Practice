import './App.css';
import React from "react";


function App() {


    const arr1 = [ 20, 12, 18, 30, 21]
    const arr2 = 1939
    const arr3 = 5
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b,c) => {
        const key = String(b)
        return String.fromCharCode(...a.map((c, i) => c - Number(key[i % key.length]) + 96))
    }
    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;

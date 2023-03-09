import './App.css';
import React from "react";


function App() {


    const arr1 = 'riley'
    // const arr2 = 1.92
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        const res = a.split("")
        const res2 = res[0].toUpperCase()
        console.log(res2)
       return `Hello ${a}`

    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;

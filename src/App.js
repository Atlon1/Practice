import './App.css';
import React from "react";


function App() {


    const arr1 = "this is number: 7"
    // const arr2 = 0.66
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {

return Number(a.replace(/\D/g, ''))

    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;

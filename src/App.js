import './App.css';
import React from "react";


function App() {


    const arr1 = 122201
    // const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.toString(a%2 ? 16 : 2)

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
